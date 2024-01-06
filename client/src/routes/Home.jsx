import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
  <div className="max-w-5xl m-auto p-4 grid grid-cols-3 gap-4 gap-y-8">
    {children}
  </div>
)

const ProductCard = ({ product }) => {
  const { _id, name, slug, price, image } = product

  return (
    <Link to={`/product/${slug}`}>
      <div className="aspect-square bg-slate-100 mb-2 rounded overflow-hidden">
        {image ? (
          <img
            src={API_BASE + image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex align-middle justify-center text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        )}
      </div>
      <h2 className="text-xl">{name}</h2>
      <p>${price}</p>
    </Link>
  )
}

export default Home
