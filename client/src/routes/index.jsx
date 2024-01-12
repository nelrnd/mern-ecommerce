import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Root"
import Home from "./Home"
import Login from "./Login"
import AdminRoute from "./AdminRoute"
import Register from "./Register"
import Dashboard from "./Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <AdminRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
