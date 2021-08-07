import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
// Combines all the reducers in one reducer that creates store

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
