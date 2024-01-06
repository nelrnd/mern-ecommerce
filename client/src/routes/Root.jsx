import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Root = () => (
  <>
    <NavBar />

    <div className="max-w-5xl m-auto p-4 py-8">
      <Outlet />
    </div>
  </>
)

export default Root
