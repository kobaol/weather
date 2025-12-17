import { mmLabel } from '../utils/formatters.js'

const KIND_LABEL = {
  none: 'brak',
  rain: 'deszcz',
  snow: 'śnieg'
}

export default function Precipitation({ precip }) {
  return (
    <div className="kv">
      <div className="kv__k">Opady</div>
      <div className="kv__v">
        Prawdopodobieństwo: {precip.probabilityPct}% ·
        Rodzaj: {KIND_LABEL[precip.kind] || precip.kind} ·
        Ilość: {mmLabel(precip.amountMm)}
      </div>
    </div>
  )
}
