import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
// Combines all the reducers in one reducer that creates store

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
