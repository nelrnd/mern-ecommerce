import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProductImage from "../components/ProductImage"

const API_BASE = import.meta.env.VITE_API_BASE

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(API_BASE + "product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <h1>Home</h1>

      {products.length && (
        <Grid>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Grid>
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
      <ProductImage image={image} name={name} />
      <h2 className="text-xl">{name}</h2>
      <p>${price}</p>
    </Link>
  )
}

export default Home
