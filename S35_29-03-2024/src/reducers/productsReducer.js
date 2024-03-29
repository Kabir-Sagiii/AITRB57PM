const productsReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "PRODUCT":
      state = {
        ...state,
        cart: [...state.cart, action.payload],
      };
      break;
  }

  return state;
};

export default productsReducer;
