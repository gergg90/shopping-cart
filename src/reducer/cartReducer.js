export const initialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  MINUS_TO_CART: "MINUS_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productIncartIndex = state.findIndex((item) => item.id === id);

      if (productIncartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productIncartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.MINUS_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      const newState = structuredClone(state);

      if (newState[productInCartIndex].quantity > 1) {
        newState[productInCartIndex].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      }

      const updateState = state.filter((item) => item.id !== id);
      updateLocalStorage(updateState);
      return updateState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }
  }

  return state;
};
