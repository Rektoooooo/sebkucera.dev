import { useWeather } from '../hooks/useWeather'

// WMO weather codes (what Open-Meteo returns) → Apple-style wording and an icon kind.
const LABELS = {
  0: 'Clear', 1: 'Mostly Clear', 2: 'Partly Cloudy', 3: 'Cloudy', 45: 'Foggy', 48: 'Foggy',
  51: 'Drizzle', 53: 'Drizzle', 55: 'Drizzle', 56: 'Freezing Drizzle', 57: 'Freezing Drizzle',
  61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain', 66: 'Freezing Rain', 67: 'Freezing Rain',
  71: 'Light Snow', 73: 'Snow', 75: 'Heavy Snow', 77: 'Snow', 80: 'Showers', 81: 'Showers', 82: 'Heavy Showers',
  85: 'Snow Showers', 86: 'Snow Showers', 95: 'Thunderstorms', 96: 'Thunderstorms', 99: 'Thunderstorms',
}
function kind(c) {
  if (c === 0) return 'clear'
  if (c <= 2) return 'partly'
  if (c === 3) return 'cloudy'
  if (c <= 48) return 'fog'
  if (c <= 57) return 'drizzle'
  if (c <= 67 || (c >= 80 && c <= 82)) return 'rain'
  if (c <= 77 || c === 85 || c === 86) return 'snow'
  return 'storm'
}
function label(c, day) {
  if (day && c === 0) return 'Sunny'
  if (day && c === 1) return 'Mostly Sunny'
  return LABELS[c] ?? 'Weather'
}

const CLOUD = 'M9.5 25h13.2a5.3 5.3 0 0 0 .9-10.5 7.4 7.4 0 0 0-14-1.6A6 6 0 0 0 9.5 25Z'

function Sun({ x = 16, y = 16, r = 5.6 }) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4
    return <line key={i} x1={x + Math.cos(a) * (r + 2.6)} y1={y + Math.sin(a) * (r + 2.6)} x2={x + Math.cos(a) * (r + 5)} y2={y + Math.sin(a) * (r + 5)} />
  })
  return (
    <g>
      <g stroke="#ffb800" strokeWidth="2.2" strokeLinecap="round">{rays}</g>
      <circle cx={x} cy={y} r={r} fill="#ffcc00" />
    </g>
  )
}
const Moon = ({ x = 18, y = 12 }) => <path d={`M${x + 4} ${y + 7.5}a7.5 7.5 0 1 1-6-12 6 6 0 0 0 6 12Z`} fill="#b9b0ff" />
const Cloud = ({ dy = 0 }) => <path d={CLOUD} transform={`translate(0 ${dy})`} fill="#fff" stroke="rgba(30, 40, 70, .26)" strokeWidth="1" />

function WeatherIcon({ code, day }) {
  const k = kind(code)
  return (
    <svg className="w-icon" viewBox="0 0 32 32" aria-hidden="true">
      {k === 'clear' && (day ? <Sun /> : <Moon x={14} y={14} />)}
      {k === 'partly' && (
        <>
          {day ? <Sun x={20} y={11} r={4.6} /> : <Moon x={20} y={7} />}
          <Cloud dy={2} />
        </>
      )}
      {k === 'cloudy' && (
        <>
          <path d={CLOUD} transform="translate(5 -5) scale(.8)" fill="#d5dce8" />
          <Cloud dy={1} />
        </>
      )}
      {k === 'fog' && (
        <g stroke="#9aa6b8" strokeWidth="2.2" strokeLinecap="round">
          <path d="M6 12h20M8 17h16M6 22h20" />
        </g>
      )}
      {['drizzle', 'rain', 'storm', 'snow'].includes(k) && <Cloud dy={-4} />}
      {k === 'drizzle' && <g fill="#4aa3ff"><circle cx="11" cy="26" r="1.3" /><circle cx="16" cy="28" r="1.3" /><circle cx="21" cy="26" r="1.3" /></g>}
      {k === 'rain' && <g stroke="#4aa3ff" strokeWidth="2" strokeLinecap="round"><path d="M11 24l-1.5 4M16.5 24 15 28M22 24l-1.5 4" /></g>}
      {k === 'snow' && <g fill="#8fc3ff"><circle cx="11" cy="26" r="1.6" /><circle cx="16.5" cy="28.5" r="1.6" /><circle cx="22" cy="26" r="1.6" /></g>}
      {k === 'storm' && <path d="M17.5 21 12.5 27.5h4l-1.5 4.5 6-7h-4l1.5-4Z" fill="#ffcc00" />}
    </svg>
  )
}

// Lock-screen widget: live weather in Prague. Its slot is reserved, so nothing jumps when it loads.
export default function WeatherWidget() {
  const w = useWeather()
  const text = w ? label(w.code, w.day) : ''
  return (
    <div className={`weather glass${w ? ' ready' : ''}`} aria-hidden={!w} aria-label={w ? `Prague: ${w.temp} degrees, ${text}` : undefined}>
      {w && (
        <>
          <WeatherIcon code={w.code} day={w.day} />
          <span className="w-main">
            <b>{w.temp}°</b>
            <span>{text}</span>
          </span>
          <span className="w-side">
            <span className="w-place">
              Prague
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M10.6 1.4 1.5 5.2l4 1.3 1.3 4 3.8-9.1Z" fill="currentColor" />
              </svg>
            </span>
            <span>
              H:{w.hi}° L:{w.lo}°
            </span>
          </span>
        </>
      )}
    </div>
  )
}
