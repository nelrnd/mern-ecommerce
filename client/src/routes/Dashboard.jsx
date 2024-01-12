import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../providers/authProvider"
import axios from "../axios"
import ProductImage from "../components/ProductImage"

const Dashboard = () => {
  const { user } = useAuth()

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="max-w-5xl m-auto">
      <div className="mb-6">
        <h1 className="heading text-5xl">Dashboard</h1>
        <p className="text-gray-600">Welcome back {user.name}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 font-bold text-2xl text-gray-900">
          Products{" "}
          <span className="font-normal text-base text-gray-600">
            ({products.length})
          </span>
        </h2>
        <div className="flex flex-col gap-2">
          <Link to="/product/create" className="btn btn-primary w-fit">
            Create new
          </Link>
          {products.map((product) => (
            <ProductTab key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ProductTab = ({ product }) => {
  return (
    <div className="p-3 border border-gray-100 rounded-md flex items-center gap-3">
      <div className="flex items-center gap-3 flex-1">
        <ProductImage src={product.image} size={28} />
        <Link to={`/product/${product.slug}`} className="hover:underline">
          <h3>{product.name}</h3>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link
          to={`/product/${product.slug}/edit`}
          className="btn btn-secondary btn-small"
        >
          Edit
        </Link>
        <Link
          to={`/product/${product.slug}/delete`}
          className="btn btn-danger btn-small"
        >
          Delete
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
