import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/cartReducer.js";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const minusToCart = (product) =>
    dispatch({
      type: "MINUS_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  //! Usando directamente useState en el provider
  // const addToCart = (product) => {
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart);
  //     newCart[productInCartIndex].quantity += 1;
  //     return setCart(newCart);
  //   }

  //   setCart((prevState) => [
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1,
  //     },
  //   ]);
  // };

  // const minusToCart = (product) => {
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id);
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart);
  //     if (newCart[productInCartIndex].quantity > 1) {
  //       newCart[productInCartIndex].quantity -= 1;
  //       setCart(newCart);
  //     } else {
  //       return setCart((prevState) =>
  //         prevState.filter((item) => item.id !== product.id)
  //       );
  //     }
  //   }
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  // };

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart, minusToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
