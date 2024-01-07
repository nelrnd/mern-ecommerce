import { useState } from "react"
import { Link } from "react-router-dom"
import FormControl from "../components/FormControl"

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Register")
  }

  return (
    <div className="max-w-sm m-auto">
      <h1 className="font-bold text-3xl mb-8">Register</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <FormControl
          label="First name"
          value={firstName}
          setValue={setFirstName}
        />

        <FormControl
          label="Last name"
          value={lastName}
          setValue={setLastName}
        />

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

        <button className="btn-primary">Register</button>
      </form>

      <p className="text-slate-500">
        You already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  )
}

export default Register
