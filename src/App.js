import React from "react";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import { Route, Switch, Link } from "react-router-dom";
import "./app.css";

const hatsPage = (props) => {
  console.log(props);
  return <h1>HATS PAGE</h1>;
};

const App = () => {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Link to="/">HOME</Link>
      <Link to="/shop">SHOP</Link>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" exact={true} component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
