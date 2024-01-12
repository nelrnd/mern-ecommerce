import { useParams } from "react-router-dom"

const API_BASE = import.meta.env.VITE_API_BASE

const ProductDelete = () => {
  const { productSlug } = useParams()

  const handleClick = () => {
    fetch(`${API_BASE}product/${productSlug}`, { method: "DELETE" }).catch(
      (err) => console.error(err)
    )
  }

  return (
    <div className="max-w-sm m-auto">
      <h1 className="font-bold text-3xl mb-4">Delete product</h1>

      <p className="text-slate-500 mb-4">
        Do you really want to delete this product?
      </p>

      <button onClick={handleClick} className="btn-primary">
        Delete
      </button>
    </div>
  )
}

export default ProductDelete
