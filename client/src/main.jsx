import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import Home from "./routes/Home"
import Product from "./routes/Product"
import CreateCategory from "./routes/CreateCategory"
import Login from "./routes/Login"
import Register from "./routes/Register"
import ProductDelete from "./routes/ProductDelete"
import ProductForm from "./routes/ProductForm"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // product related
      {
        path: "/product/create",
        element: <ProductForm />,
      },
      {
        path: "/product/:productSlug",
        element: <Product />,
      },
      {
        path: "/product/:productSlug/update",
        element: <ProductForm />,
      },
      {
        path: "/product/:productSlug/delete",
        element: <ProductDelete />,
      },
      // category related
      {
        path: "/category/create",
        element: <CreateCategory />,
      },
      // user related
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
