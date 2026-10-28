import { APPS, ME, NOTIFICATIONS } from '../content'
import { appHref } from '../hooks/useRoute'
import { scrollToUnlocked } from '../hooks/useUnlock'
import { I, Padlock } from './Icons'
import WeatherWidget from './WeatherWidget'

// The hero: a Mac lock screen (an iPhone one on phones). Scrolling unlocks it; see useUnlock.
export default function LockScreen({ date }) {
  const unlock = () => scrollToUnlocked()

  return (
    <section className="lock" aria-label="Lock screen">
      <div className="lock-top">
        <div className="padlock">
          <Padlock />
          <Padlock open />
        </div>
        <div className="date">{date}</div>
        <h1 className="clock">
          {ME.first}
          <span className="sr-only"> {ME.last}</span>
        </h1>
        <div className="clock-sub">
          {ME.last} · {ME.role}
        </div>
      </div>

      <div className="weather-slot">
        <WeatherWidget />
      </div>

      <div className="notifs">
        {NOTIFICATIONS.map((n) => (
          <a key={n.from} className="notif glass" href={n.app ? appHref(n.app) : n.href}>
            <img src={n.icon ?? APPS[n.app].icon} alt="" width="38" height="38" />
            <div>
              <div className="top">
                {n.from} <span>{n.note}</span>
              </div>
              <p>{n.text}</p>
            </div>
          </a>
        ))}
      </div>

      <button className="lock-user" type="button" onClick={unlock} aria-label="Unlock">
        <img src={ME.avatar} alt="" width="68" height="68" />
        <b>
          {ME.first} {ME.last}
        </b>
        <span className="pw glass">
          <span className="ph">Enter Password</span>
          <span className="dots" aria-hidden="true">
            ●●●●●●●●
          </span>
          <span className="go">
            <I name="arrow" />
          </span>
        </span>
        <span className="hint">
          <I name="chevDown" />
          Scroll to unlock
        </span>
      </button>

      <button className="lock-swipe" type="button" onClick={unlock}>
        Swipe up to open
        <i />
      </button>
    </section>
  )
}
