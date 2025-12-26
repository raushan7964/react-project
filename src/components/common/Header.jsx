import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-300'

  return (
    <header className="bg-black px-6 py-4 flex gap-6">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>

      <div>
        <NavLink to="/login" className={linkClass}>
          Login
        </NavLink>
        <NavLink to="/register" className={linkClass}>
          Register
        </NavLink>
      </div>
    </header>
  )
}

export default Header
