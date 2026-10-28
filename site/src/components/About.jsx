import { ABOUT, APPS, FACTS, HIRE, LINKS, ME, SERVICES, STACK } from '../content'
import GitHubCard from './GitHubCard'
import Milestones from './Milestones'
import { I } from './Icons'
import { useUI } from './ui'

const external = { target: '_blank', rel: 'noopener noreferrer' }
export default function About() {
  const ui = useUI()
  return (
    <>
      <section className="sec" id="about">
        <div className="sec-head">
          <h3>About</h3>
          <span>The person behind the apps</span>
        </div>
        <div className="about-grid">
          <div className="card meet">
            <div className="meet-head">
              <button type="button" className="meet-avatar" onClick={ui.openAbout} title="About This Developer">
                <img src={ME.avatar} alt={`${ME.first} ${ME.last}`} width="76" height="76" />
              </button>
              <div>
                <div className="eyebrow">Meet the developer</div>
                <h3>Hi, I’m Seb.</h3>
              </div>
            </div>
            {ABOUT.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <ul className="facts">
              {FACTS.map((f) => (
                <li key={f.text}>
                  <I name={f.icon} />
                  {f.text}
                </li>
              ))}
            </ul>
            <ul className="chips" aria-label="Tools I use">
              {STACK.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="links">
              <a className="pill" href={LINKS.github} {...external}>
                GitHub
              </a>
              <a className="pill" href={LINKS.linkedin} {...external}>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="services">
            {SERVICES.map((s) => (
              <div key={s.title} className="card service">
                <span className={`service-icon ${s.tint}`}>
                  <I name={s.icon} />
                </span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GitHubCard />
        <Milestones />
      </section>

      <section className="hire" id="contact">
        <div className="hire-copy">
          <div className="eyebrow">
            <i className="live" /> {HIRE.eyebrow} · {HIRE.status}
          </div>
          <h3>{HIRE.title}</h3>
          <p>{HIRE.text}</p>
          <div className="hire-actions">
            <a className="btn-white" href={`mailto:${LINKS.email}?subject=${encodeURIComponent(HIRE.subject)}`}>
              <I name="mail" />
              Email me
            </a>
            <button className="btn-glass" type="button" onClick={ui.copyEmail}>
              <I name="copy" />
              Copy email
            </button>
          </div>
        </div>
        <div className="hire-icons" aria-hidden="true">
          {HIRE.icons.map((id) => (
            <img key={id} src={APPS[id].icon} alt="" width="96" height="96" />
          ))}
        </div>
      </section>
    </>
  )
}
