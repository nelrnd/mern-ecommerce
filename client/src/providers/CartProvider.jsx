import { createContext, useContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const contextValue = {
    isOpen,
    openCart,
    closeCart,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}

export default CartProvider
