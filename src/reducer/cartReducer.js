export const initialState = [];
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productIncartIndex = state.findIndex((item) => item.id === id);

      if (productIncartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productIncartIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }

    case "MINUS_TO_CART": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      const newState = structuredClone(state);

      if (newState[productInCartIndex].quantity > 1) {
        newState[productInCartIndex].quantity -= 1;
        return newState;
      }
      return state.filter((item) => item.id !== id);
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }

    case "CLEAR_CART": {
      return initialState;
    }
  }

  return state;
};
