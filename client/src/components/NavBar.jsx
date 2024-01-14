import { Link } from "react-router-dom"
import {
  PiCaretDownBold,
  PiMagnifyingGlass,
  PiHeart,
  PiBag,
  PiUser,
} from "react-icons/pi"
import { useAuth } from "../providers/authProvider"
import logo from "../assets/seldo.svg"

const NavBar = () => {
  const { user, setUser } = useAuth()

  const logout = () => {
    setUser(null)
  }

  return (
    <nav className="px-12 border-b border-slate-200">
      <div className="h-24 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Seldo" className="h-6" />
        </Link>

        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-1">
            Categories
            <PiCaretDownBold className="text-gray-400" />
          </li>
          <li className="flex items-center gap-1">
            Brands
            <PiCaretDownBold className="text-gray-400" />
          </li>
          <li>
            <Link to="/catalog">Latest</Link>
          </li>
          {user && user.isAdmin && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>

        <ul className="flex items-center gap-3">
          <li>
            <button className="btn-icon">
              <PiMagnifyingGlass />
            </button>
          </li>
          <li>
            <Link to="/favorites" className="btn-icon">
              <PiHeart />
            </Link>
          </li>
          <li>
            <button className="btn-icon">
              <PiBag />
            </button>
          </li>
          <li>
            <Link to="/login" className="btn-icon">
              <PiUser />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
