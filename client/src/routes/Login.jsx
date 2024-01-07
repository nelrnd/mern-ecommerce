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
    <div className="max-w-sm m-auto">
      <h1 className="font-bold text-3xl mb-8">Login</h1>

      <form onSubmit={handleSubmit} className="mb-4">
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

        <button className="btn-primary">Login</button>
      </form>

      <p className="text-slate-500">
        You don&apos;t have an account yet?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login
