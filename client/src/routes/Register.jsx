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
    <div className="max-w-md m-auto p-6 border border-gray-200 rounded-lg">
      <h1 className="font-bold text-gray-900 text-3xl text-center mb-6">
        Register
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
