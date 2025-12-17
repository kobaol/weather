import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import WeatherIcon from './WeatherIcon.jsx'
import { formatTemp, fromCelsius } from '../utils/units.js'
import { mmLabel } from '../utils/formatters.js'

export default function Forecast5Days({ forecast }) {
  const unit = useSelector((s) => s.units.temperature)

  const rows = useMemo(() => {
    return forecast.map((d) => ({
      ...d,
      temp: fromCelsius(d.tempC, unit)
    }))
  }, [forecast, unit])

  return (
    <div className="card section">
      <h3 className="section__title">Prognoza na 5 dni</h3>
      <div className="forecast">
        {rows.map((d) => (
          <div className="forecast__item" key={d.dayLabel}>
            <div className="forecast__day">{d.dayLabel}</div>
            <div className="forecast__icon">
              <WeatherIcon condition={d.condition} size={24} />
            </div>
            <div className="forecast__temp">
              {formatTemp(d.temp, unit)}
            </div>
            <div className="forecast__precip">
              <div>{d.precip.probabilityPct}%</div>
              <div className="muted">
                {mmLabel(d.precip.amountMm)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
