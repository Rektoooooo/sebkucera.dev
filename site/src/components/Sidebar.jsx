import { APPS, HIRE, ME, WHATS_NEW } from '../content'
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

function NavLink({ s, active }) {
  return (
    <a className={active === s.id ? 'on' : undefined} href={`#${s.id}`}>
      <I name={s.icon} />
      {s.label}
    </a>
  )
}

// The App Store window's sidebar doubles as the site navigation.
export default function Sidebar({ active }) {
  const ui = useUI()
  const news = APPS[WHATS_NEW.app]
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
          <a className="side-card news" href={appHref(WHATS_NEW.app)}>
            <img src={news.icon} alt="" width="36" height="36" />
            <span>
              <span className="k">What’s new</span>
              <b>{WHATS_NEW.title}</b>
              <span>{WHATS_NEW.text}</span>
            </span>
          </a>
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
