import { Link } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../store/favoritesSlice.js'
import WeatherIcon from './WeatherIcon.jsx'
import { formatTemp, fromCelsius } from '../utils/units.js'

export default function CityCard({ city }) {
  const unit = useSelector((s) => s.units.temperature)
  const favorites = useSelector((s) => s.favorites.cityIds)
  const isFav = favorites.includes(city.id)
  const dispatch = useDispatch()

  const displayTemp = useMemo(() => {
    const v = fromCelsius(city.now.tempC, unit)
    return formatTemp(v, unit)
  }, [city.now.tempC, unit])

  const onToggle = useCallback(
    (e) => {
      e.preventDefault()
      dispatch(toggleFavorite(city.id))
    },
    [dispatch, city.id]
  )

  return (
    <Link to={`/city/${city.id}`} className="card city-card">
      <div className="city-card__left">
        <div className="city-card__name">{city.name}</div>
        <div className="city-card__meta">
          <WeatherIcon condition={city.now.condition} />
          <span className="city-card__temp">{displayTemp}</span>
          <span className="muted">{city.country}</span>
        </div>
      </div>
      <button
        className={`star ${isFav ? 'star--on' : ''}`}
        onClick={onToggle}
        aria-label={isFav ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
        title={isFav ? 'Ulubione' : 'Dodaj do ulubionych'}
      >
        {isFav ? '★' : '☆'}
      </button>
    </Link>
  )
}
