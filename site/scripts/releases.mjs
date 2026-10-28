// Snapshots each app's release info into src/data/releases.json for the "What's New" sections and
// the About timeline. GitHub apps (APPS[id].repo) come from their GitHub releases via the GitHub CLI;
// App Store apps (APPS[id].appStoreId) from Apple's public lookup API. Runs before every deploy;
// whatever can't be fetched keeps its previous value, so a deploy never fails because of it.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { APPS } from '../src/content.js'

const OWNER = 'Rektoooooo'
const OUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/releases.json')
const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {}

// First paragraph of a release body, without markdown or images, as a one-line summary.
function summary(body = '') {
  const para = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !p.startsWith('#') && !p.startsWith('!['))
  return (para ?? '')
    .replace(/\*\*|__|`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}
const version = (tag) => tag.replace(/^v/i, '')

function fromGitHub(repo) {
  const raw = execFileSync('gh', ['api', `repos/${OWNER}/${repo}/releases?per_page=100`], { encoding: 'utf8' })
  const list = JSON.parse(raw).filter((r) => !r.draft && !r.prerelease)
  if (!list.length) return null
  const latest = list[0]
  const first = list[list.length - 1]
  return {
    version: version(latest.tag_name),
    date: latest.published_at.slice(0, 10),
    summary: summary(latest.body),
    count: list.length,
    first: { version: version(first.tag_name), date: first.published_at.slice(0, 10) },
    history: list.slice(0, 5).map((r) => ({ version: version(r.tag_name), date: r.published_at.slice(0, 10) })),
    url: `https://github.com/${OWNER}/${repo}/releases`,
  }
}

async function fromAppStore(id) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=us`)
  const app = (await res.json()).results?.[0]
  if (!app) return null
  return {
    version: app.version,
    date: app.currentVersionReleaseDate.slice(0, 10),
    summary: summary(app.releaseNotes),
    first: { date: app.releaseDate.slice(0, 10) },
    url: app.trackViewUrl.split('?')[0],
    store: true,
  }
}

const out = {}
for (const [id, app] of Object.entries(APPS)) {
  if (!app.repo && !app.appStoreId) continue
  try {
    out[id] = (app.repo ? fromGitHub(app.repo) : await fromAppStore(app.appStoreId)) ?? previous[id]
  } catch (err) {
    console.warn(`  ${id}: skipped (${err.message.split('\n')[0]})`)
    out[id] = previous[id]
  }
  if (out[id]) console.log(`  ${id}: ${out[id].version} (${out[id].date})`)
}
mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`)
console.log('Release snapshot → src/data/releases.json')
