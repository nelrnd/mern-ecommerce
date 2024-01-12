import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../axios"
import FormControl from "../components/FormControl"
import { useAuth } from "../providers/authProvider"

const Register = () => {
  const { user, setUser } = useAuth()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true })
    }
  }, [user, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()

    setErrors({})

    axios
      .post("/auth/register", { full_name: fullName, email, password })
      .then((res) => {
        const user = res.data.user
        setUser(user)
      })
      .catch((err) => {
        if (err.response) {
          const errors = err.response.data.errors
          if (errors) setErrors(errors)
        }
      })
  }

  return (
    <div className="max-w-md m-auto p-6 border border-gray-200 rounded-lg">
      <h1 className="font-bold text-gray-900 text-3xl text-center mb-6">
        Register
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormControl
          label="Full Name"
          value={fullName}
          setValue={setFullName}
          error={errors["full_name"]}
        />

        <FormControl
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          error={errors["email"]}
        />

        <FormControl
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
          error={errors["password"]}
        />

        <button className="btn-primary mt-2">Register</button>
      </form>

      <p className="text-gray-600 mt-8">
        You already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-600">
          Login
        </Link>
      </p>
    </div>
  )
}

export default Register
