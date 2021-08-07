import React from "react";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import SigninPage from "./pages/signin-signupPage";
const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" exact={true} component={ShopPage} />
        <Route path="/signin" exact={true} component={SigninPage} />
      </Switch>
    </div>
  );
};

export default App;
