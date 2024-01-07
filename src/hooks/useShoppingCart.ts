import { create } from 'zustand'

type Store = {
  cart: CartItem[]
  addToCart: (cartItem: CartItem) => void
  removeCartItem: (cartItem: CartItem) => void
}

const saveArrayoLocalStorage = (array: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(array))
}

export const useShoppingCart = create<Store>()((set) => ({
  cart: (() => {
    if (typeof window === 'undefined')
      return []

    const cart = localStorage.getItem('cart')
    if(cart)
      return JSON.parse(cart)

    return []
  })(),
  addToCart: (cartItem: CartItem) => set(
    (state) => {
      const currentCart = state.cart
      const itemExists = currentCart.find((item) => item.id === cartItem.id)
      const replacedExistingItem = currentCart.map((item) => {
        if (item.id === cartItem.id)
          return cartItem
        return item
      })

      if (itemExists) {
        saveArrayoLocalStorage(replacedExistingItem)
        return ({ cart: replacedExistingItem })
      }

      saveArrayoLocalStorage([...currentCart, cartItem])
      return ({ cart: [...currentCart, cartItem] })
    }),
    removeCartItem: (cartItem: CartItem) => set((state) => {
      const currentCart = state.cart
      const newCart = currentCart.filter((item) => item.id !== cartItem.id)
      saveArrayoLocalStorage(newCart)
      return ({ cart: newCart })
    })
}))
