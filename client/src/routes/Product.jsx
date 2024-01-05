import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
  }, [productId])

  const handleBuy = () => {
    console.log("Buy")
  }

  if (!product) return null

  return (
    <>
      <h1>{product.name}</h1>
      <p>
        <strong>${product.price}</strong>
      </p>
      <p>{product.desc}</p>
      <button onClick={handleBuy}>Buy</button>
    </>
  )
}

export default Product
