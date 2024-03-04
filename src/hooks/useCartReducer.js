import { useReducer } from "react";
import {
  reducer,
  initialState,
  CART_ACTION_TYPES,
} from "../reducer/cartReducer.js";

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });

  const minusToCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.MINUS_TO_CART,
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART,
    });

  return { state, addToCart, minusToCart, removeFromCart, clearCart };
};
