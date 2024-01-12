import AuthProvider from "./providers/authProvider"
import Routes from "./routes"

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
