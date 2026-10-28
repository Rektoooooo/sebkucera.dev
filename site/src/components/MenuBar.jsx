import { ME } from '../content'
import { scrollToLock } from '../hooks/useUnlock'
import Dropdown, { MenuItem, MenuNote, MenuSep } from './Dropdown'
import { Battery, HomeTile, I, Wifi } from './Icons'
import { useUI } from './ui'

// The Mac menu bar. On the lock screen only the status items show; the menus slide in on unlock.
export default function MenuBar({ clock }) {
  const ui = useUI()
  return (
    <header className="menubar">
      <nav className="mb-menu" aria-label="Menu bar">
        <Dropdown label="Sebastian menu" className="mb-logo-dd" trigger={<span className="mb-logo"><HomeTile /></span>}>
          <MenuItem onClick={ui.openAbout}>About This Developer</MenuItem>
          <MenuSep />
          <MenuItem onClick={ui.openSpotlight} hint="⌘K">
            Spotlight Search…
          </MenuItem>
          <MenuItem href="#contact">Hire Sebastian…</MenuItem>
          <MenuSep />
          <MenuItem onClick={ui.sleep}>Sleep</MenuItem>
          <MenuItem onClick={scrollToLock} hint="⌃⌘Q">
            Lock Screen
          </MenuItem>
        </Dropdown>
        <b>{ME.first}</b>
        <a href="#apps">iPhone</a>
        <a href="#mac">Mac</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="mb-status">
        <Dropdown label="Battery" align="right" trigger={<Battery />}>
          <MenuNote title="Battery">Power Source: Espresso</MenuNote>
          <MenuSep />
          <MenuNote>Fully charged. Refilled every morning around 8.</MenuNote>
          <MenuItem disabled>Low Power Mode: Never</MenuItem>
        </Dropdown>
        <Dropdown label="Wi-Fi" align="right" trigger={<Wifi />}>
          <MenuNote title="Wi-Fi">Connected</MenuNote>
          <MenuSep />
          <MenuItem disabled>
            <I name="check" /> Prague 5G
          </MenuItem>
          <MenuSep />
          <MenuNote>Other Networks</MenuNote>
          <MenuItem disabled>Pretty Fly for a Wi-Fi</MenuItem>
          <MenuItem disabled>Bill Wi the Science Fi</MenuItem>
          <MenuItem disabled>FBI Surveillance Van #3</MenuItem>
        </Dropdown>
        <button className="dd-btn" type="button" aria-label="Spotlight Search" onClick={ui.openSpotlight}>
          <I name="search" />
        </button>
        <span className="mb-clock">{clock}</span>
      </div>
    </header>
  )
}
