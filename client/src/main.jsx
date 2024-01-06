import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./routes/Home"
import Product from "./routes/Product"
import CreateProduct from "./routes/CreateProduct"
import CreateCategory from "./routes/CreateCategory"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
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
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
