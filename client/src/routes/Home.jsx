import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "../axios"
import ProductImage from "../components/ProductImage"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h1 className="heading">Home</h1>

      {products.length ? (
        <Grid>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Grid>
      ) : (
        <p className="text-center text-gray-600">No products yet...</p>
      )}
    </>
  )
}

const Grid = ({ children }) => (
  <div className="grid grid-cols-3 gap-4 gap-y-8">{children}</div>
)

const ProductCard = ({ product }) => {
  const { _id, name, slug, price, image } = product

  return (
    <Link to={`/product/${slug}`}>
      <ProductImage src={image} />

      <h2 className="mt-4 font-bold text-xl">{name}</h2>
      <p>${price}</p>
    </Link>
  )
}

export default Home
