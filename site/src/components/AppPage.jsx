import { useEffect } from 'react'
import { APPS, ME } from '../content'
import releases from '../data/releases.json'
import { fullDate as fmt } from '../format'
import { goBack, switchApp } from '../hooks/useRoute'
import { AppRow } from './Discover'
import { I } from './Icons'

const external = { target: '_blank', rel: 'noopener noreferrer' }

// "What's New", from the release snapshot (scripts/releases.mjs).
function WhatsNew({ rel }) {
  const firstOnly = rel.date === rel.first.date
  return (
    <section className="whats-new">
      <div className="wn-head">
        <h3>What’s New</h3>
        <a href={rel.url} {...external}>
          {rel.store ? 'View in App Store' : 'Version History'}
        </a>
      </div>
      <div className="wn-meta">
        <span>Version {rel.version}</span>
        <span>{fmt(rel.date)}</span>
      </div>
      <p>{rel.summary || (firstOnly ? 'The first release.' : 'Fixes and improvements.')}</p>
      {rel.count > 1 && (
        <ul className="wn-history" aria-label="Earlier versions">
          {rel.history.slice(1, 4).map((h) => (
            <li key={h.version}>
              {h.version} <span>{fmt(h.date)}</span>
            </li>
          ))}
          <li className="wn-count">
            {rel.count} releases since {fmt(rel.first.date)}
          </li>
        </ul>
      )}
    </section>
  )
}

// An App Store–style product page. The real link only lives behind the big blue button.
export default function AppPage({ id }) {
  const app = APPS[id]
  const others = Object.keys(APPS).filter((k) => k !== id)

  useEffect(() => {
    // Escape goes back, unless it's closing Spotlight or a window first
    const onKey = (e) => e.key === 'Escape' && !document.querySelector('[role="dialog"], [role="menu"]') && goBack()
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [])

  return (
    <article className="page" aria-labelledby="app-name">
      <nav className="page-nav">
        <button className="back" type="button" onClick={goBack}>
          <I name="chevLeft" />
          <span className="desk-only">Discover</span>
          <span className="phone-only">Today</span>
        </button>
      </nav>

      <header className="app-head">
        <img className="app-icon" src={app.icon} alt="" width="140" height="140" />
        <div className="app-title">
          <h2 id="app-name">{app.name}</h2>
          <p className="sub">{app.subtitle}</p>
          <a className="dev" href="#about">
            {ME.first} {ME.last}
          </a>
          <div className="app-actions">
            <a className="btn-get" href={app.action.href} {...external}>
              {app.action.label}
              <I name="out" />
            </a>
          </div>
        </div>
      </header>

      <ul className="strip" aria-label="At a glance">
        {app.strip.map((s) => (
          <li key={s.label}>
            <span className="k">{s.label}</span>
            <b>{s.value}</b>
            <span className="n">{s.note}</span>
          </li>
        ))}
      </ul>

      {app.shots.length > 0 && (
        <section className="gallery" data-kind={app.shotsKind} aria-label="Screenshots">
          <div className="gallery-track">
            {app.shots.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                width={s.w}
                height={s.h}
                alt={`${app.name} screenshot ${i + 1}`}
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            ))}
          </div>
        </section>
      )}

      {releases[id] && <WhatsNew rel={releases[id]} />}

      <section className="desc">
        <div>
          {app.description.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="features" aria-label="Highlights">
          {app.features.map((f) => (
            <li key={f}>
              <I name="check" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="info">
        <h3>Information</h3>
        <dl>
          {app.info.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v.startsWith('brew ') ? <code>{v}</code> : v}</dd>
            </div>
          ))}
          {app.links.map(([k, href]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>
                <a href={href} {...external}>
                  {href.replace(/^https:\/\/(www\.)?/, '')}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="more-by">
        <h3>
          More by {ME.first} {ME.last}
        </h3>
        <div className="more">
          {others.map((k) => (
            <AppRow key={k} id={k} onClick={(e) => switchApp(e, k)} />
          ))}
        </div>
      </section>
    </article>
  )
}
