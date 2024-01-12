import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Root"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"

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
    ],
  },
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
