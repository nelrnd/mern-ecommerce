import { Link } from "react-router-dom"
import logo from "../assets/seldo.svg"

const NavBar = () => (
  <nav className="px-12 border-b border-slate-200">
    <div className="h-24 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="Seldo" />
      </Link>

      <ul className="flex gap-3">
        <li>
          <Link to="/login" className="p-3 text-slate-600 hover:text-black">
            Account
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavBar
