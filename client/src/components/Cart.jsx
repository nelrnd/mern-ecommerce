import { PiX } from "react-icons/pi"
import { useCart } from "../providers/CartProvider"

const Cart = () => {
  const { isOpen, closeCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black opacity-25"
      />
      <div className="absolute w-96 h-screen bg-white right-0 flex flex-col">
        <header className="p-8 flex items-center justify-between border border-b-gray-200">
          <h2 className="font-semibold text-3xl">My Cart</h2>
          <button onClick={closeCart} className="btn-icon">
            <PiX />
          </button>
        </header>

        <main className="flex-1"></main>

        <footer className="p-8">
          <button className="btn btn-primary">Checkout</button>
        </footer>
      </div>
    </div>
  )
}

export default Cart
