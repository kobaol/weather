import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import CitiesListPage from './pages/CitiesListPage.jsx'
import CityDetailsPage from './pages/CityDetailsPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CitiesListPage />} />
        <Route path="/city/:cityId" element={<CityDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
