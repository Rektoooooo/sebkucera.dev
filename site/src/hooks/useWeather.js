import { useEffect, useState } from 'react'

// Live weather in Prague from Open-Meteo (free, no key, CORS-enabled). Cached for 15 minutes per tab;
// returns null until it arrives, and stays null if it can't be reached (the widget then stays hidden).
const URL =
  'https://api.open-meteo.com/v1/forecast?latitude=50.0755&longitude=14.4378' +
  '&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min' +
  '&timezone=Europe%2FPrague&forecast_days=1'
const KEY = 'sk-weather'
const FRESH = 15 * 60 * 1000

function cached() {
  try {
    const hit = JSON.parse(sessionStorage.getItem(KEY))
    return hit && Date.now() - hit.at < FRESH ? hit.data : null
  } catch {
    return null
  }
}

export function useWeather() {
  const [weather, setWeather] = useState(cached)

  useEffect(() => {
    if (weather) return undefined
    const ctrl = new AbortController()
    const timeout = setTimeout(() => ctrl.abort(), 6000)
    fetch(URL, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((j) => {
        const data = {
          temp: Math.round(j.current.temperature_2m),
          code: j.current.weather_code,
          day: j.current.is_day === 1,
          hi: Math.round(j.daily.temperature_2m_max[0]),
          lo: Math.round(j.daily.temperature_2m_min[0]),
        }
        setWeather(data)
        try {
          sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), data }))
        } catch {
          // private mode or storage full: fine, we just refetch next time
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout))
    return () => {
      clearTimeout(timeout)
      ctrl.abort()
    }
  }, [weather])

  return weather
}
