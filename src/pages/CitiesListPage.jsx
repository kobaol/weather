import { useMemo, useState, useCallback } from 'react'
import { CITIES } from '../data/cities.js'
import CityCard from '../components/CityCard.jsx'
import SearchForm from '../components/SearchForm.jsx'

export default function CitiesListPage() {
  const [query, setQuery] = useState('')

  const onChange = useCallback((v) => setQuery(v), [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CITIES
    return CITIES.filter((c) => c.name.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <div className="row row--between" style={{ marginBottom: 12 }}>
        <h1 className="h1">Miasta</h1>
        <span className="muted">Wyświetlono: {filtered.length}</span>
      </div>

      <SearchForm value={query} onChange={onChange} />

      <div className="grid" style={{ marginTop: 12 }}>
        {filtered.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  )
}
