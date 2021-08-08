import rootReducer from "../rootReducer";
import { createStore } from "redux";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";

const compose =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose);
const persistor = persistStore(store);

const exportObj = { store, persistor };

export default exportObj;
