import Cart from "./components/Cart"
import AuthProvider from "./providers/AuthProvider"
import CartProvider from "./providers/CartProvider"
import Routes from "./routes"

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Cart />
        <Routes />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
