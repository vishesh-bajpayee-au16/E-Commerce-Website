import React from "react";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import { Route, Switch, Link } from "react-router-dom";
import "./app.css";
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" exact={true} component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
