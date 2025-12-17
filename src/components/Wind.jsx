import { windDirFromDeg } from '../utils/units.js'

export default function Wind({ speedMps, deg }) {
  const dir = windDirFromDeg(deg)
  return (
    <div className="kv">
      <div className="kv__k">Wiatr</div>
      <div className="kv__v">
        {speedMps.toFixed(1)} m/s · {dir} ({Math.round(deg)}°)
      </div>
    </div>
  )
}
