import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "../axios"
import FormControl from "../components/FormControl"
import FileInput from "../components/FileInput"

const ProductForm = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (slug) {
      axios
        .get(`/product/${slug}`)
        .then((res) => {
          const product = res.data
          setName(product.name)
          setPrice(product.price)
          setDesc(product.desc)
          setCategory(product.category._id)
          setImage(product.image)
          console.log(product)
        })
        .catch((err) => console.log(err))
    }
  }, [slug])

  useEffect(() => {
    axios
      .get("/category")
      .then((res) => {
        setCategories(res.data)
        if (!category && res.data[0]) {
          setCategory(res.data[0]._id)
        }
      })
      .catch((err) => console.log(err))
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("desc", desc)
    formData.append("category", category)
    formData.append("image", image)

    axios[slug ? "put" : "post"](
      slug ? `/product/${slug}` : "/product",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
      .then((res) => navigate(`/product/${res.data.slug}`))
      .catch((err) => {
        if (err.response) {
          const errors = err.response.data.errors

          if (errors) setErrors(errors)
        }
      })
  }

  return (
    <div className="card">
      <h1 className="heading">{slug ? "Update product" : "Create product"}</h1>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <FormControl
          label="Name"
          value={name}
          setValue={setName}
          error={errors["name"]}
        />

        <FormControl
          type="number"
          label="Price (in $)"
          value={price}
          setValue={setPrice}
          error={errors["price"]}
        />

        <FormControl
          type="textarea"
          label="Description"
          value={desc}
          setValue={setDesc}
        />

        <label className="block">
          <span className="text-gray-600">Category</span>
          <select
            name="category"
            className="w-full mt-1.5 p-3 border-gray-300 rounded focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        <FileInput label="Image" name="image" setValue={setImage} />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ProductForm
