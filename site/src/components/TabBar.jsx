import { I } from './Icons'
import { SECTIONS } from './Sidebar'

const TABS = SECTIONS.filter((s) => s.tab)

// The iPhone tab bar: a floating glass pill whose highlight slides to the section you're reading.
export default function TabBar({ active }) {
  const index = TABS.findIndex((s) => s.id === active)
  return (
    <nav className="tabbar glass" aria-label="Sections">
      <span className={`tab-pill${index < 0 ? ' off' : ''}`} style={{ '--i': Math.max(index, 0) }} />
      {TABS.map((s) => (
        <a key={s.id} className={active === s.id ? 'on' : undefined} href={`#${s.id}`}>
          <I name={s.tabIcon ?? s.icon} />
          {s.tab}
        </a>
      ))}
    </nav>
  )
}
