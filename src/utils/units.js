export const UNITS = {
  C: 'C',
  F: 'F',
  K: 'K'
}

export function toCelsius(kelvin) {
  return kelvin - 273.15
}

export function fromCelsius(c, unit) {
  switch (unit) {
    case UNITS.F:
      return (c * 9) / 5 + 32
    case UNITS.K:
      return c + 273.15
    case UNITS.C:
    default:
      return c
  }
}

export function formatTemp(value, unit) {
  // value expected in target unit
  const rounded = Math.round(value)
  if (unit === UNITS.K) return `${rounded} K`
  return `${rounded}°${unit}`
}

export function windDirFromDeg(deg) {
  // 16-point compass
  const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const idx = Math.round((deg % 360) / 22.5) % 16
  return dirs[idx]
}
