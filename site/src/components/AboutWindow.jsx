import { useEffect, useRef, useState } from 'react'
import { ME, SYSTEM_INFO } from '../content'

// Easter egg: "About This Mac", but for the developer. Drag it by its title bar.
export default function AboutWindow({ onClose }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [serial, setSerial] = useState(false)
  const drag = useRef(null)
  const closeBtn = useRef(null)

  // take focus when opened, hand it back on close
  useEffect(() => {
    const opener = document.activeElement
    closeBtn.current?.focus({ preventScroll: true })
    return () => opener?.focus?.({ preventScroll: true })
  }, [])

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])

  const start = (e) => {
    if (e.target.closest('button')) return
    drag.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const move = (e) => drag.current && setPos({ x: e.clientX - drag.current.x, y: e.clientY - drag.current.y })
  const end = () => {
    drag.current = null
  }

  return (
    <div
      className="about-win"
      role="dialog"
      aria-label="About This Developer"
      style={{ '--dx': `${pos.x}px`, '--dy': `${pos.y}px` }}
    >
      <div className="about-bar" onPointerDown={start} onPointerMove={move} onPointerUp={end}>
        <div className="lights">
          <button ref={closeBtn} type="button" aria-label="Close" onClick={onClose} />
          <i />
          <i />
        </div>
      </div>
      <div className="about-body">
        <img src={ME.avatar} alt="" width="112" height="112" />
        <h2>
          {ME.first} {ME.last}
        </h2>
        <p className="about-ver">{SYSTEM_INFO.version}</p>
        <dl>
          {SYSTEM_INFO.specs.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <div>
            <dt>Serial Number</dt>
            <dd>
              <button type="button" className="serial" onClick={() => setSerial(true)}>
                {serial ? SYSTEM_INFO.serial : 'Click to reveal'}
              </button>
            </dd>
          </div>
        </dl>
        <div className="about-btns">
          <a className="btn-mac" href="#about" onClick={onClose}>
            More Info…
          </a>
          <a className="btn-mac primary" href="#contact" onClick={onClose}>
            Hire…
          </a>
        </div>
        <p className="about-legal">™ and © 2021–2026 Sebastian Kučera. All rights reserved.</p>
      </div>
    </div>
  )
}
