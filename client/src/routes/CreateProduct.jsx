import { useState } from "react"

function CreateProduct() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name || !desc) return

    const formData = new FormData()
    formData.append("name", name)
    formData.append("desc", desc)
    formData.append("price", price)
    formData.append("image", image)

    fetch("http://localhost:3000/product", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setName("")
        setDesc("")
        setPrice(0)
        setImage(null)
        console.log(data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <h1>Create new product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Price (in $)</span>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
          />
        </label>
        <label>
          <span>Description</span>
          <textarea
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Image</span>
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <button>Publish</button>
      </form>
    </>
  )
}

export default CreateProduct
