import { useState } from "react"
import { Link } from "react-router-dom"
import FormControl from "../components/FormControl"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Login")
  }

  return (
    <div className="max-w-md m-auto p-6 border border-gray-200 rounded-lg">
      <h1 className="font-bold text-gray-900 text-3xl text-center mb-6">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormControl
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
        />

        <FormControl
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />

        <button className="btn-primary mt-2">Login</button>
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
