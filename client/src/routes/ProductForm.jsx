import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FormControl from "../components/FormControl"
import FileInput from "../components/FileInput"

const API_BASE = import.meta.env.VITE_API_BASE

const ProductForm = () => {
  const { productSlug } = useParams()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    if (productSlug) {
      fetch(`${API_BASE}product/${productSlug}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name)
          setPrice(data.price)
          setDesc(data.desc)
          setImage(data.image)
        })
        .catch((err) => console.error(err))
    }
  }, [productSlug])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("desc", desc)
    formData.append("image", image)

    const url = API_BASE + "product/" + (productSlug || "")
    const method = productSlug ? "PUT" : "POST"

    fetch(url, { method, body: formData })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }

  return (
    <div className="max-w-sm m-auto">
      <h1 className="font-bold text-3xl mb-8">
        {productSlug ? "Update product" : "Create product"}
      </h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormControl label="Name" value={name} setValue={setName} />
        <FormControl
          type="number"
          label="Price (in $)"
          value={price}
          setValue={setPrice}
        />
        <FormControl
          type="textarea"
          label="Description"
          value={desc}
          setValue={setDesc}
        />
        <FileInput label="Image" name="image" setValue={setImage} />
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ProductForm
