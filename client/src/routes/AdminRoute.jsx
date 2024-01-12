import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../providers/authProvider"

const AdminRoute = () => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }

  if (!user.isAdmin) {
    return (
      <h1 className="mt-8 font-bold text-3xl text-center">
        Insufficient permissions
      </h1>
    )
  }

  return <Outlet />
}

export default AdminRoute
