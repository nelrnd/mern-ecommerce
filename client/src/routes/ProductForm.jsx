import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "../axios"
import FormControl from "../components/FormControl"
import FileInput from "../components/FileInput"

const ProductForm = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [desc, setDesc] = useState("")
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
          setImage(product.image)
        })
        .catch((err) => console.log(err))
    }
  }, [slug])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("desc", desc)
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

        <FileInput label="Image" name="image" setValue={setImage} />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ProductForm
