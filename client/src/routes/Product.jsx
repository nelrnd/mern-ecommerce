import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductImage from "../components/ProductImage"

const API_BASE = import.meta.env.VITE_API_BASE

const Product = () => {
  const { productSlug } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch(API_BASE + "product/" + productSlug)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
  }, [productSlug])

  if (!product) return null

  return (
    <>
      <div className="max-w-5xl m-auto p-4 py-8 grid grid-cols-2 gap-8">
        <ProductImage image={product.image} name={product.name} />

        <div>
          <h1 className="text-4xl mt-4 mb-2">{product.name}</h1>
          <p className="mb-4">${product.price}</p>
          <p className="mb-6">{product.desc}</p>

          <button className="bg-slate-900 text-white px-6 py-3 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default Product
