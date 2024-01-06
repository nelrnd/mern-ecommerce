import { Link } from "react-router-dom"

const NavBar = () => (
  <nav className="border-b border-slate-200 px-12">
    <div className="h-24 flex justify-between items-center">
      <Link to="/">
        <h3 className="font-bold text-2xl p-3 -m-3">MyBrand</h3>
      </Link>

      <ul className="flex gap-3">
        <li>
          <Link to="/" className="p-3 text-slate-600 hover:text-black">
            T-Shirts
          </Link>
        </li>
        <li>
          <Link to="/" className="p-3 text-slate-600 hover:text-black">
            Hoodies & Sweats
          </Link>
        </li>
        <li>
          <Link to="/" className="p-3 text-slate-600 hover:text-black">
            Pants
          </Link>
        </li>
      </ul>

      <ul className="flex gap-3">
        <li>
          <Link to="/" className="p-3 text-slate-600 hover:text-black">
            Search
          </Link>
        </li>
        <li>
          <Link to="/" className="p-3 text-slate-600 hover:text-black">
            Account
          </Link>
        </li>
        <li>
          <Link to="/" className="p-3 text-slate-600 hover:text-black">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/" className="p-3 text-slate-600 hover:text-black">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavBar
