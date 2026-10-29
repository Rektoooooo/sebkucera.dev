import { APPS, HIRE, ME } from '../content'
import releases from '../data/releases.json'
import { shortDate } from '../format'
import { appHref } from '../hooks/useRoute'
import { I } from './Icons'
import { useUI } from './ui'

// Sections of the Discover page. `tab` is the iPhone tab bar label (sections without one stay off it).
export const SECTIONS = [
  { id: 'top', label: 'Discover', tab: 'Today', icon: 'star', tabIcon: 'today' },
  { id: 'apps', label: 'iPhone', tab: 'iPhone', icon: 'phone' },
  { id: 'mac', label: 'Mac', tab: 'Mac', icon: 'mac' },
  { id: 'more', label: 'More', icon: 'grid' },
  { id: 'clients', label: 'Clients', icon: 'globe' },
  { id: 'about', label: 'About', tab: 'About', icon: 'person', group: 'me' },
  { id: 'contact', label: 'Hire me', tab: 'Hire', icon: 'briefcase', group: 'me' },
]

// "What's new" is the newest release across all apps, from the release snapshot (refreshed nightly).
const latest = Object.entries(releases)
  .filter(([id, r]) => APPS[id] && r?.date)
  .sort(([, a], [, b]) => b.date.localeCompare(a.date))[0]

function NavLink({ s, active }) {
  return (
    <a className={active === s.id ? 'on' : undefined} href={`#${s.id}`}>
      <I name={s.icon} />
      {s.label}
    </a>
  )
}

function NewsCard({ id, rel }) {
  const app = APPS[id]
  return (
    <a className="side-card news" href={appHref(id)}>
      <img src={app.icon} alt="" width="36" height="36" />
      <span>
        <span className="k">
          What’s new <time dateTime={rel.date}>{shortDate(rel.date)}</time>
        </span>
        <b>
          {app.name} {rel.version} is out
        </b>
        <span className="t">{rel.summary || app.subtitle}</span>
      </span>
    </a>
  )
}

// The App Store window's sidebar doubles as the site navigation.
export default function Sidebar({ active }) {
  const ui = useUI()
  return (
    <aside className="side">
      <div className="side-in">
        <div className="lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <button className="side-search" type="button" onClick={ui.openSpotlight}>
          <I name="search" />
          Search
          <kbd>⌘K</kbd>
        </button>
        <nav aria-label="Sections">
          {SECTIONS.filter((s) => !s.group).map((s) => (
            <NavLink key={s.id} s={s} active={active} />
          ))}
          <div className="side-label">{ME.first}</div>
          {SECTIONS.filter((s) => s.group).map((s) => (
            <NavLink key={s.id} s={s} active={active} />
          ))}
        </nav>

        <div className="side-cards">
          {latest && <NewsCard id={latest[0]} rel={latest[1]} />}
          <div className="side-card avail">
            <span className="k">
              <i className="live" /> {HIRE.status}
            </span>
            <b>Apps and websites for your business</b>
            <a className="side-cta" href="#contact">
              Let’s talk
            </a>
          </div>
        </div>

        <button className="account" type="button" onClick={ui.openAbout} title="About This Developer">
          <img src={ME.avatar} alt="" width="30" height="30" />
          <span>
            <b>
              {ME.first} {ME.last}
            </b>
            <span>Prague</span>
          </span>
        </button>
      </div>
    </aside>
  )
}
