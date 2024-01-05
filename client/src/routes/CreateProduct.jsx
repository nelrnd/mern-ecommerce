import { useState } from "react"

function CreateProduct() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name || !desc) return
    const data = {}
    if (name) data.name = name
    if (desc) data.desc = desc
    if (price) data.price = price
    fetch("http://localhost:3000/product/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setName("")
        setDesc("")
        setPrice(0)
        console.log(data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <h1>Create new product</h1>
      <form onSubmit={handleSubmit}>
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
        <button>Publish</button>
      </form>
    </>
  )
}

export default CreateProduct
