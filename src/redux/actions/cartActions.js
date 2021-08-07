import { cartActionTypes } from "../actionTypes/actionTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.toggleCart,
});

export const addItemToCart = (payload) => ({
  type: cartActionTypes.addItem,
  payload,
});
