import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <h1>Home</h1>
      {products.length &&
        products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
          />
        ))}
    </>
  )
}

export default Home
