import { cartActionTypes } from "../actionTypes/actionTypes";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.toggleCart:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActionTypes.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
