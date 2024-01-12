import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { PiWarningFill } from "react-icons/pi"
import axios from "../axios"
import FormControl from "../components/FormControl"
import { useAuth } from "../providers/authProvider"

const Login = () => {
  const { user, setUser } = useAuth()

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
      .post("/auth/login", { email, password })
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
    <div className="card">
      <h1 className="font-bold text-gray-900 text-3xl text-center mb-6">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

        {errors.global && (
          <p className="mt-1 text-sm text-red-500 flex gap-1 items-center">
            <PiWarningFill className="text-base" />
            {errors.global}
          </p>
        )}

        <button className="btn btn-primary mt-2">Login</button>
      </form>

      <p className="text-gray-600 mt-8">
        You don&apos;t have an account yet?{" "}
        <Link to="/register" className="text-blue-500 hover:text-blue-600">
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login
