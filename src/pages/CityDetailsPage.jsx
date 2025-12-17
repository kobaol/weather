import { Link, useParams } from 'react-router-dom'
import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCityById } from '../data/cities.js'
import WeatherIcon from '../components/WeatherIcon.jsx'
import Forecast5Days from '../components/Forecast5Days.jsx'
import Precipitation from '../components/Precipitation.jsx'
import Wind from '../components/Wind.jsx'
import { toggleFavorite } from '../store/favoritesSlice.js'
import { formatTemp, fromCelsius } from '../utils/units.js'

export default function CityDetailsPage() {
  const { cityId } = useParams()
  const city = useMemo(() => getCityById(cityId), [cityId])
  const unit = useSelector((s) => s.units.temperature)
  const favorites = useSelector((s) => s.favorites.cityIds)
  const dispatch = useDispatch()

  const isFav = favorites.includes(cityId)
  const onToggle = useCallback(
    () => dispatch(toggleFavorite(cityId)),
    [dispatch, cityId]
  )

  if (!city) {
    return (
      <div className="container">
        <div className="card pad">
          <div className="row row--between">
            <div>
              <div className="title">Miasto nie znalezione</div>
              <div className="muted">
                Sprawdź link lub wróć do listy miast.
              </div>
            </div>
            <Link className="btn" to="/">
              ← Do listy
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const tempNow = formatTemp(fromCelsius(city.now.tempC, unit), unit)

  return (
    <div className="container">
      <div className="row row--between mb12">
        <Link className="btn" to="/">
          ← Lista miast
        </Link>
        <Link className="btn" to="/favorites">
          ★ Ulubione
        </Link>
      </div>

      <div className="card pad mb16">
        <div className="row row--between">
          <div>
            <div className="title">
              {city.name}{' '}
              <span className="muted">({city.country})</span>
            </div>
            <div
              className="row"
              style={{ gap: 10, alignItems: 'center', marginTop: 6 }}
            >
              <WeatherIcon condition={city.now.condition} size={28} />
              <div className="big">{tempNow}</div>
              <div className="muted">teraz</div>
            </div>
          </div>

          <button
            className={isFav ? 'star star--on' : 'star'}
            onClick={onToggle}
            title="Dodaj/usuń z ulubionych"
          >
            ★
          </button>
        </div>

        <div className="grid2 mt16">
          <Precipitation precip={city.now.precip} />
          <Wind
            speedMps={city.now.windSpeedMps}
            deg={city.now.windDeg}
          />
          <div className="kv">
            <div className="kv__k">Zachmurzenie</div>
            <div className="kv__v">{city.now.cloudsPct}%</div>
          </div>
          <div className="kv">
            <div className="kv__k">Warunki</div>
            <div className="kv__v">{city.now.condition}</div>
          </div>
        </div>
      </div>

      <div className="card pad">
        <div className="subtitle mb10">Prognoza na 5 dni</div>
        <Forecast5Days forecast={city.forecast5} />
      </div>
    </div>
  )
}
