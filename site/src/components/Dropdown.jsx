import { useEffect, useRef, useState } from 'react'

// A Mac menu-bar menu: opens on click, closes on outside click, Escape or picking an item.
export default function Dropdown({ label, trigger, align = 'left', className = '', children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const away = (e) => !ref.current?.contains(e.target) && setOpen(false)
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', away)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('pointerdown', away)
      document.removeEventListener('keydown', esc)
    }
  }, [open])

  return (
    <div className={`dd ${className}`} ref={ref}>
      <button
        className={`dd-btn${open ? ' on' : ''}`}
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {trigger}
      </button>
      {open && (
        <div className={`dd-menu ${align}`} role="menu" onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  )
}

export function MenuItem({ onClick, href, hint, disabled, children }) {
  if (href) {
    return (
      <a className="mi" role="menuitem" href={href}>
        {children}
        {hint && <span className="mi-hint">{hint}</span>}
      </a>
    )
  }
  return (
    <button className="mi" role="menuitem" type="button" onClick={onClick} disabled={disabled}>
      {children}
      {hint && <span className="mi-hint">{hint}</span>}
    </button>
  )
}

export const MenuSep = () => <div className="mi-sep" role="separator" />

export function MenuNote({ title, children }) {
  return (
    <div className="mi-note">
      {title && <b>{title}</b>}
      {children}
    </div>
  )
}
