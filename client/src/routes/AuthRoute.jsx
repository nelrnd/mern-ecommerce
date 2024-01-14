import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"

const AuthRoute = () => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default AuthRoute
