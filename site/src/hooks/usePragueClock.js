import { useEffect, useState } from 'react'

const tz = 'Europe/Prague'
const FORMATS = {
  date: new Intl.DateTimeFormat('en-GB', { timeZone: tz, weekday: 'long', day: 'numeric', month: 'long' }),
  time: new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit' }),
  menubar: new Intl.DateTimeFormat('en-GB', { timeZone: tz, weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
}

const read = () => {
  const now = new Date()
  return {
    date: FORMATS.date.format(now),
    time: FORMATS.time.format(now),
    menubar: FORMATS.menubar.format(now).replace(',', ''),
  }
}

// Live date and time in Prague, refreshed every 15 seconds.
export function usePragueClock() {
  const [clock, setClock] = useState(read)
  useEffect(() => {
    const t = setInterval(() => setClock(read()), 15000)
    return () => clearInterval(t)
  }, [])
  return clock
}
