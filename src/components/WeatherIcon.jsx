const ICONS = {
  sunny: '☀️',
  cloudy: '☁️',
  rain: '🌧️',
  snow: '🌨️',
  windy: '💨'
}

export default function WeatherIcon({ condition, size = 22, title }) {
  const icon = ICONS[condition] || '🌡️'
  return (
    <span
      aria-label={title || condition}
      title={title || condition}
      style={{ fontSize: size, lineHeight: 1 }}
    >
      {icon}
    </span>
  )
}
