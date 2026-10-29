import { APPS, DISCOVER, ME } from '../content'
import { appHref } from '../hooks/useRoute'
import { scrollToLock } from '../hooks/useUnlock'
import About from './About'
import { useUI } from './ui'

function ArtCard({ id, center }) {
  const app = APPS[id]
  return (
    <a className={`card art${center ? ' center' : ''}`} href={appHref(id)}>
      <span className={`bg ${app.card.bg}`} />
      <img className="big" src={app.icon} alt="" width="256" height="256" />
      <div className="copy">
        <div className="eyebrow">{app.card.eyebrow}</div>
        <h3>{app.card.title}</h3>
      </div>
      <div className="bar">
        <img src={app.icon} alt="" width="44" height="44" />
        <div className="t">
          <b>{app.name}</b>
          <span>{app.card.tagline}</span>
        </div>
        <span className="get">{app.card.cta}</span>
      </div>
    </a>
  )
}

// A client website, shown in a little Safari window.
function SiteCard({ id }) {
  const app = APPS[id]
  return (
    <a className="card site" href={appHref(id)}>
      <div className="site-window" aria-hidden="true">
        <div className="site-bar">
          <span className="site-lights">
            <i />
            <i />
            <i />
          </span>
          <span className="site-url">{app.site}</span>
        </div>
        <img src={app.shots[0].src} alt="" width={app.shots[0].w} height={app.shots[0].h} loading="lazy" decoding="async" />
      </div>
      <div className="site-meta">
        <img src={app.icon} alt="" width="44" height="44" />
        <div>
          <b>{app.name}</b>
          <span>{app.subtitle}</span>
        </div>
        <span className="pill">VIEW</span>
      </div>
    </a>
  )
}

export function AppRow({ id, onClick }) {
  const app = APPS[id]
  return (
    <a className="row" href={appHref(id)} onClick={onClick}>
      <img src={app.icon} alt="" width="58" height="58" />
      <div>
        <b>{app.name}</b>
        <span>{app.row ?? app.subtitle}</span>
      </div>
      <span className="pill">VIEW</span>
    </a>
  )
}

export default function Discover({ date, time }) {
  const ui = useUI()
  return (
    <div className="discover">
      <header className="head">
        <div>
          <div className="eyebrow">{date}</div>
          <h2>
            {ME.first} {ME.last}
          </h2>
        </div>
        <button type="button" className="head-avatar" onClick={ui.openAbout} title="About This Developer">
          <img src={ME.avatar} alt="" width="52" height="52" />
        </button>
      </header>
      <p className="lede">
        {ME.role[0].toUpperCase() + ME.role.slice(1)}. <b>{ME.pitch}</b>
      </p>

      <section className="featured" id="apps" aria-label="Featured">
        <ArtCard id={DISCOVER.featured} />
        <div className="card list">
          <div className="eyebrow">On the App Store</div>
          <h3>Apps you can download today</h3>
          {DISCOVER.appStore.map((id) => (
            <AppRow key={id} id={id} />
          ))}
          <p className="list-foot">Free to download, for iPhone and iPad.</p>
        </div>
      </section>

      <section className="sec" id="mac">
        <div className="sec-head">
          <h3>Made for the Mac</h3>
          <span>Free and open source</span>
        </div>
        <div className="mac">
          {DISCOVER.mac.map((id) => (
            <ArtCard key={id} id={id} center />
          ))}
        </div>
      </section>

      <section className="sec" id="more">
        <div className="sec-head">
          <h3>More by {ME.first}</h3>
          <span>Side projects and experiments</span>
        </div>
        <div className="more">
          {DISCOVER.more.map((id) => (
            <AppRow key={id} id={id} />
          ))}
        </div>
      </section>

      <section className="sec" id="clients">
        <div className="sec-head">
          <h3>Client work</h3>
          <span>Websites I’ve built for clients</span>
        </div>
        <div className="sites">
          {DISCOVER.clients.map((id) => (
            <SiteCard key={id} id={id} />
          ))}
        </div>
      </section>

      <About />

      <footer className="foot">
        <span>
          © 2026 {ME.first} {ME.last} · Prague · {time} · Weather by{' '}
          <a href="https://open-meteo.com" target="_blank" rel="noopener noreferrer">
            Open-Meteo
          </a>
        </span>
        <button type="button" onClick={scrollToLock}>
          Lock Screen <span className="kbd">⌃⌘Q</span>
        </button>
      </footer>
    </div>
  )
}
