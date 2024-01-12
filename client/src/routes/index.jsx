import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Root"
import Home from "./Home"
import Login from "./Login"
import AdminRoute from "./AdminRoute"
import Register from "./Register"
import Catalog from "./Catalog"
import Product from "./Product"
import Dashboard from "./Dashboard"
import ProductForm from "./ProductForm"
import ProductDelete from "./ProductDelete"
import CategoryForm from "./CategoryForm"
import CategoryDelete from "./CategoryDelete"

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
        path: "/category/:slug",
        element: <Catalog />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
      },
      {
        element: <AdminRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/product/create",
            element: <ProductForm />,
          },
          {
            path: "/product/:slug/edit",
            element: <ProductForm />,
          },
          {
            path: "/product/:slug/delete",
            element: <ProductDelete />,
          },
          {
            path: "/category/create",
            element: <CategoryForm />,
          },
          {
            path: "/category/:slug/edit",
            element: <CategoryForm />,
          },
          {
            path: "/category/:slug/delete",
            element: <CategoryDelete />,
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
