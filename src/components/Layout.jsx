import { NavLink, Outlet } from 'react-router-dom'
import UnitsSwitcher from './UnitsSwitcher.jsx'

export default function Layout() {
  return (
    <div>
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">
            <div className="brand__dot" />
            <div>
              <div className="brand__title">Prognoza pogody</div>
              <div className="brand__sub">React + Router + Redux + LocalStorage</div>
            </div>
          </div>

          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              Miasta
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              Ulubione
            </NavLink>
          </nav>

          <UnitsSwitcher />
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}
