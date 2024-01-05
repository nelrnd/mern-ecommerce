import { useState } from "react"

function CreateCategory() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name) return
    const data = {}
    if (name) data.name = name
    if (desc) data.desc = desc
    fetch("http://localhost:3000/category/", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setName("")
        setDesc("")
        console.log(data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <h1>Create new category</h1>
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
          <span>Description</span>
          <textarea
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <button>Publish</button>
      </form>
    </>
  )
}

export default CreateCategory
