import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import exportObj from "./redux/store/store";

ReactDOM.render(
  <Provider store={exportObj.store}>
    <BrowserRouter>
      <PersistGate persistor={exportObj.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
