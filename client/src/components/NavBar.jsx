import { Link } from "react-router-dom"
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
          <img src={logo} alt="Seldo" />
        </Link>

        <ul className="flex items-center gap-3">
          {user && user.isAdmin && (
            <li>
              <Link
                to="/dashboard"
                className="p-3 text-slate-600 hover:text-black"
              >
                Dashboard
              </Link>
            </li>
          )}
          {user ? (
            <li>
              <button
                onClick={logout}
                className="p-3 text-slate-600 hover:text-black"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="p-3 text-slate-600 hover:text-black">
                Account
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
