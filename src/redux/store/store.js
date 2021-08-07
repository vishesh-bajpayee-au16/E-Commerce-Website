import rootReducer from "../rootReducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const compose =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewares = [logger, compose];
const store = createStore(rootReducer, compose);

export default store;
