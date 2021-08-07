import { actionTypes } from "../actionTypes/actionTypes";

export const setCurrentUser = (user) => ({
  type: actionTypes.setUser,
  payload: user,
});
