// Snapshots GitHub activity (the contribution grid plus a few stats) into src/data/github.json.
// Runs before every deploy. The grid is read from the public profile calendar, so it matches
// exactly what visitors see on github.com (private work only counts there if "Private
// contributions" is switched on in GitHub's contribution settings). Repo stats come from the
// GitHub CLI (`gh auth login`). If anything fails, the previous snapshot stays and the deploy
// carries on.
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const LOGIN = 'Rektoooooo'
const OUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/github.json')
const LEVEL = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 }

const query = `query($login: String!) {
  user(login: $login) {
    createdAt
    repositories(ownerAffiliations: OWNER, privacy: PUBLIC) { totalCount }
    recent: repositories(first: 5, ownerAffiliations: OWNER, privacy: PUBLIC, orderBy: { field: PUSHED_AT, direction: DESC }) {
      nodes { name description pushedAt primaryLanguage { name color } }
    }
    contributionsCollection { contributionCalendar { totalContributions
      weeks { contributionDays { date contributionCount contributionLevel } } } }
  }
}`

// The calendar on github.com/<login>: one <td data-date data-level> per day, counts in <tool-tip>s.
async function profileCalendar() {
  const res = await fetch(`https://github.com/users/${LOGIN}/contributions`, { headers: { Accept: 'text/html' } })
  if (!res.ok) throw new Error(`calendar HTTP ${res.status}`)
  const html = await res.text()
  const tips = Object.fromEntries([...html.matchAll(/for="(contribution-day-component-[\d-]+)"[^>]*>([^<]*)<\/tool-tip>/g)].map((m) => [m[1], m[2]]))
  const days = [...html.matchAll(/data-date="([\d-]+)" id="(contribution-day-component-[\d-]+)" data-level="(\d)"/g)]
    .map(([, date, id, level]) => {
      const tip = tips[id] ?? ''
      const count = /^\d/.test(tip) ? Number(tip.match(/^[\d,]+/)[0].replace(/,/g, '')) : 0
      return { date, count, level: Number(level) }
    })
    .sort((a, b) => a.date.localeCompare(b.date))
  const total = Number(html.match(/([\d,]+)\s+contributions?\s+in the last year/)?.[1].replace(/,/g, ''))
  if (days.length < 300 || !Number.isFinite(total)) throw new Error('calendar markup changed')
  return { days, total }
}

function apiCalendar(user) {
  const cal = user.contributionsCollection.contributionCalendar
  const days = cal.weeks.flatMap((w) => w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVEL[d.contributionLevel] })))
  return { days, total: cal.totalContributions }
}

try {
  const raw = execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`, '-F', `login=${LOGIN}`], { encoding: 'utf8' })
  const user = JSON.parse(raw).data.user
  let source = 'profile'
  const { days, total } = await profileCalendar().catch((err) => {
    source = `API (${err.message})`
    return apiCalendar(user)
  })

  let longest = 0
  let run = 0
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0
    longest = Math.max(longest, run)
  }
  // group into Sunday-first weeks, like GitHub draws them
  const firstWeekday = new Date(`${days[0].date}T00:00:00Z`).getUTCDay()
  const weeks = []
  days.forEach((d, i) => {
    const w = Math.floor((i + firstWeekday) / 7)
    ;(weeks[w] ??= []).push([d.count, d.level])
  })

  const snapshot = {
    login: LOGIN,
    updated: new Date().toISOString().slice(0, 10),
    joined: Number(user.createdAt.slice(0, 4)),
    joinedDate: user.createdAt.slice(0, 10),
    publicRepos: user.repositories.totalCount,
    total,
    activeDays: days.filter((d) => d.count > 0).length,
    longestStreak: longest,
    start: days[0].date,
    firstWeekday,
    // most recently pushed public repos (skipping the profile README repo)
    recent: user.recent.nodes
      .filter((r) => r.name !== LOGIN)
      .slice(0, 3)
      .map((r) => ({ name: r.name, description: r.description ?? '', pushed: r.pushedAt.slice(0, 10), language: r.primaryLanguage?.name ?? null, color: r.primaryLanguage?.color ?? null })),
    weeks,
  }
  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, `${JSON.stringify(snapshot)}\n`)
  console.log(`GitHub snapshot from ${source}: ${total} contributions over ${days.length} days → src/data/github.json`)
} catch (err) {
  console.warn(`GitHub snapshot skipped (${err.message.split('\n')[0]}); keeping the previous one.`)
}
