import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./routes/Home"
import Product from "./routes/Product"
import CreateProduct from "./routes/CreateProduct"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/product/create",
    element: <CreateProduct />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
