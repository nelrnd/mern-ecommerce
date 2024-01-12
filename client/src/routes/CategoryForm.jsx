import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "../axios"
import FormControl from "../components/FormControl"

const CategoryForm = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (slug) {
      axios
        .get(`/category/${slug}`)
        .then((res) => {
          const category = res.data.category
          setName(category.name)
          setDesc(category.desc)
        })
        .catch((err) => console.log(err))
    }
  }, [slug])

  const handleSubmit = (e) => {
    e.preventDefault()

    axios[slug ? "put" : "post"](slug ? `/category/${slug}` : "/category", {
      name,
      desc,
    })
      .then((res) => {
        navigate(`/category/${res.data.slug}`)
      })
      .catch((err) => {
        if (err.response) {
          const errors = err.response.data.errors

          if (errors) setErrors(errors)
        }
      })
  }

  return (
    <div className="card">
      <h1 className="heading">
        {slug ? "Update category" : "Create category"}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormControl
          label="Name"
          value={name}
          setValue={setName}
          error={errors["name"]}
        />

        <FormControl
          type="textarea"
          label="Description"
          value={desc}
          setValue={setDesc}
        />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CategoryForm
