import { Link } from "react-router-dom"
import {
  PiCaretDownBold,
  PiMagnifyingGlass,
  PiHeart,
  PiBag,
  PiUser,
} from "react-icons/pi"
import { useAuth } from "../providers/AuthProvider"
import logo from "../assets/seldo.svg"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import useFetch from "../hooks/useFetch"
import { useCart } from "../providers/CartProvider"

const brands = [
  {
    _id: 1,
    slug: "nike",
    name: "Nike",
  },
  {
    _id: 2,
    slug: "arcteryx",
    name: "Arc'Teryx",
  },
  {
    _id: 3,
    slug: "stussy",
    name: "Stussy",
  },
  {
    _id: 4,
    slug: "lacoste",
    name: "Lacoste",
  },
]

const NavBar = () => {
  const { user, setUser } = useAuth()
  const { openCart } = useCart()

  const categories = useFetch("/category")

  const logout = () => {
    setUser(null)
  }

  return (
    <nav className="relative z-40 px-12 border-b border-slate-200">
      <div className="h-20 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Seldo" className="h-6" />
        </Link>

        <NavigationMenu.Root className="relative" delayDuration={150}>
          <NavigationMenu.List className="flex items-center gap-3">
            {categories && (
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Categories
                  <PiCaretDownBold className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <ul className="grid grid-flow-col grid-rows-2">
                    {categories.map((c) => (
                      <li key={c._id}>
                        <Link
                          className="NavigationMenuLink"
                          to={`/category/${c.slug}`}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            )}
            {brands && (
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Brands
                  <PiCaretDownBold className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <ul className="grid grid-flow-col grid-rows-2">
                    {brands.map((b) => (
                      <li key={b._id}>
                        <Link
                          className="NavigationMenuLink"
                          to={`/brand/${b.slug}`}
                        >
                          {b.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            )}
            <NavigationMenu.Item>
              <Link className="NavigationMenuLink" to="/latest">
                Latest
              </Link>
            </NavigationMenu.Item>
            {user && user.isAdmin && (
              <NavigationMenu.Item>
                <Link className="NavigationMenuLink" to="/dashboard">
                  Dashboard
                </Link>
              </NavigationMenu.Item>
            )}
          </NavigationMenu.List>

          <div className="absolute w-full top-full mt-2.5">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>
        </NavigationMenu.Root>

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
            <button onClick={openCart} className="btn-icon">
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
