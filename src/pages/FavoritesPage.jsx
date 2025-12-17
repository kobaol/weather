import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CITIES } from '../data/cities.js'
import CityCard from '../components/CityCard.jsx'

export default function FavoritesPage() {
  const favIds = useSelector((s) => s.favorites.cityIds)

  const cities = useMemo(() => {
    return CITIES.filter((c) => favIds.includes(c.id))
  }, [favIds])

  return (
    <div className="container">
      <div className="pageHeader">
        <h1 className="h1">Ulubione miasta</h1>
        <p className="muted">
          Tutaj znajdują się miasta oznaczone jako ulubione.
        </p>
      </div>

      {cities.length === 0 ? (
        <div className="card empty">
          <div>
            Brak ulubionych miast. Przejdź na stronę główną i kliknij ⭐ obok miasta.
          </div>
        </div>
      ) : (
        <div className="grid">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      )}
    </div>
  )
}
