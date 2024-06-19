import React from 'react'
import { useTheme } from '../contexts/theme'
import ProfileIcon from '../../public/assets/icons/profile'
import HomeIcon from '../../public/assets/icons/home'
import WorkIcon from '../../public/assets/icons/work'
import TaskIcon from '../../public/assets/icons/task'
import LayoutIcon from '../../public/assets/icons/layout'
import SettingsIcon from '../../public/assets/icons/settings'
import { Link, useLocation } from 'react-router-dom'

const ROUTES: { path: string; icon: React.ReactNode }[] = [
  { path: '/', icon: <HomeIcon width={20} height={20} color="#282828" /> },
  { path: '/tasks', icon: <TaskIcon width={20} height={20} color="#282828" /> },
  { path: '/work', icon: <WorkIcon width={20} height={20} color="#282828" /> },
]

export default function Navbar() {
  const { toggleTheme } = useTheme()
  const location = useLocation()

  return (
    <div className="navbar">
      <div className="navbar-profile" onClick={toggleTheme}>
        <ProfileIcon width={28} height={28} color="black" />
      </div>

      <div className="navbar-icons">
        <div className="navbar-icons-top">
          {ROUTES.map((route) => (
            <div
              key={route.path}
              className={`navbar-icons-top-icon ${
                route.path === location.pathname ? 'navbar-icons-top-icon-active' : ''
              }`}
            >
              <Link to={route.path}>{route.icon}</Link>
            </div>
          ))}
        </div>
        <div className="navbar-icons-bottom">
        <div
            className={`navbar-icons-bottom-icon`}
          >
            <LayoutIcon width={20} height={20} color="#282828" />
          </div>
          <div
            className={`navbar-icons-bottom-icon ${
              '/settings' === location.pathname ? 'navbar-icons-bottom-icon-active' : ''
            }`}
          >
            <Link to="/settings">
              <SettingsIcon width={22} height={22} color="#282828" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
