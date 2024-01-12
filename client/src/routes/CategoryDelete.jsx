import { useNavigate, useParams } from "react-router-dom"
import axios from "../axios"

const CategoryDelete = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const handleClick = () => {
    axios
      .delete(`/category/${slug}`)
      .catch((err) => console.log(err))
      .finally(() => navigate("/dashboard"))
  }

  return (
    <div className="card">
      <h1 className="heading">Delete category</h1>

      <p className="text-gray-600 mb-4">
        Do you really want to delete this category?
      </p>

      <button onClick={handleClick} className="btn btn-danger">
        Delete
      </button>
    </div>
  )
}

export default CategoryDelete
