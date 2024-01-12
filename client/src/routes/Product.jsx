import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "../axios"
import ProductImage from "../components/ProductImage"

const Product = () => {
  const { slug } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    axios
      .get(`/product/${slug}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
  }, [slug])

  if (!product) return null

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <ProductImage src={product.image} />

        <div>
          <h1 className="heading text-4xl">{product.name}</h1>
          <p className="mb-4 font-semibold">${product.price}</p>
          <p className="mb-6 text-gray-600">{product.desc}</p>

          <button className="btn btn-primary w-fit">Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default Product
