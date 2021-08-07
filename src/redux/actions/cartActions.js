import { cartActionTypes } from "../actionTypes/actionTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.toggleCart,
});

export const addItemToCart = (payload) => ({
  type: cartActionTypes.addItem,
  payload,
});

export const removeItem = (payload) => ({
  type: cartActionTypes.removeItem,
  payload,
});

export const clearItem = (payload) => ({
  type: cartActionTypes.clearItem,
  payload,
});
