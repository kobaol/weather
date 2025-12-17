export function windDirectionFromDeg(deg) {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  const i = Math.round(((deg % 360) / 45)) % 8
  return dirs[i]
}

export function mmLabel(mm) {
  if (!mm || mm === 0) return '0 мм'
  return `${mm.toFixed(1)} мм`
}
