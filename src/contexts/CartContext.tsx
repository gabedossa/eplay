import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { GameDetails } from '../components/Modal'

type CartContextType = {
  cartItems: GameDetails[]
  addToCart: (game: GameDetails) => void
  removeFromCart: (id: number) => void
  totalItems: number
  totalPrice: string
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<GameDetails[]>([])

  const addToCart = (game: GameDetails) => {
    if (!cartItems.some((item) => item.id === game.id)) {
      setCartItems((prev) => [...prev, game])
    }
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const totalItems = cartItems.length

  const totalPrice = cartItems
    .reduce((acc, item) => {
      const price = parseFloat(
        item.newPrice.replace('R$ ', '').replace(',', '.')
      )
      return acc + price
    }, 0)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
