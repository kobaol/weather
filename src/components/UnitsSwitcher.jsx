import { useDispatch, useSelector } from 'react-redux'
import { setTemperatureUnit } from '../store/unitsSlice.js'
import { UNITS } from '../utils/units.js'

export default function UnitsSwitcher() {
  const unit = useSelector((s) => s.units.temperature)
  const dispatch = useDispatch()

  return (
    <div className="units">
      <span className="muted">Jednostki:</span>
      <select
        aria-label="Jednostki temperatury"
        value={unit}
        onChange={(e) => dispatch(setTemperatureUnit(e.target.value))}
      >
        <option value={UNITS.C}>°C</option>
        <option value={UNITS.F}>°F</option>
        <option value={UNITS.K}>K</option>
      </select>
    </div>
  )
}
