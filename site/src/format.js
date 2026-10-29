// Dates like the App Store writes them: "7 Sep 2026" (en-GB, but "Sep" rather than "Sept").
const make = (opts) => {
  const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC', ...opts })
  return (d) => f.format(typeof d === 'string' ? new Date(`${d}T00:00:00Z`) : d).replace('Sept', 'Sep')
}

export const fullDate = make({ day: 'numeric', month: 'short', year: 'numeric' })
export const dayDate = make({ weekday: 'short', day: 'numeric', month: 'short' })
export const monthYear = make({ month: 'short', year: 'numeric' })
export const shortDate = make({ day: 'numeric', month: 'short' })
