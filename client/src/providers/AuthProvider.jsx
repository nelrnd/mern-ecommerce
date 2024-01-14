import { createContext, useContext, useEffect, useMemo, useState } from "react"
import axios from "../axios"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser_] = useState(JSON.parse(localStorage.getItem("user")))

  const setUser = (newUser) => {
    setUser_(newUser)
  }

  useEffect(() => {
    if (user) {
      axios.defaults.headers.common["x-access-token"] = user.token
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      delete axios.defaults.headers.common["x-access-token"]
      localStorage.removeItem("user")
    }
  }, [user])

  useEffect(() => {
    if (user && user.isAdmin === undefined) {
      setUser({ ...user, isAdmin: user.role === "admin" })
    }
  }, [user])

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
