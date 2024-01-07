import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import Home from "./routes/Home"
import Product from "./routes/Product"
import CreateProduct from "./routes/CreateProduct"
import CreateCategory from "./routes/CreateCategory"
import "./index.css"
import Login from "./routes/Login"
import Register from "./routes/Register"

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
        path: "/product/:productSlug",
        element: <Product />,
      },
      {
        path: "/product/create",
        element: <CreateProduct />,
      },
      {
        path: "/category/create",
        element: <CreateCategory />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
