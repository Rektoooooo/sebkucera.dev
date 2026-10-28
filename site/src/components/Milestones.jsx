import { APPS } from '../content'
import github from '../data/github.json'
import releases from '../data/releases.json'
import { monthYear as month } from '../format'
import { appHref } from '../hooks/useRoute'
import { GitHubMark } from './Icons'

// A timeline built from real dates: joining GitHub, then each app's first release.
function milestones() {
  const items = Object.entries(releases).map(([id, r]) => {
    const app = APPS[id]
    return {
      key: id,
      date: r.first.date,
      href: appHref(id),
      icon: app.icon,
      title: r.store ? `${app.name} on the App Store` : `${app.name} ${r.first.version}`,
      note: r.store ? `Version ${r.version}` : r.count > 1 ? `${r.count} releases so far` : 'First release',
    }
  })
  if (github.joinedDate) items.push({ key: 'github', date: github.joinedDate, title: 'Joined GitHub', note: 'Where it all lives' })
  return items.sort((a, b) => a.date.localeCompare(b.date))
}

export default function Milestones() {
  const items = milestones()
  return (
    <div className="card milestones">
      <div className="eyebrow">Timeline</div>
      <h3>Shipped so far</h3>
      <ol className="ms-list">
        {items.map((m) => {
          const body = (
            <>
              <span className="ms-dot" aria-hidden="true" />
              <time dateTime={m.date}>{month(m.date)}</time>
              {m.icon ? (
                <img src={m.icon} alt="" width="44" height="44" />
              ) : (
                <span className="ms-gh" aria-hidden="true">
                  <GitHubMark />
                </span>
              )}
              <b>{m.title}</b>
              <span className="ms-note">{m.note}</span>
            </>
          )
          return <li key={m.key}>{m.href ? <a href={m.href}>{body}</a> : <div>{body}</div>}</li>
        })}
      </ol>
    </div>
  )
}
