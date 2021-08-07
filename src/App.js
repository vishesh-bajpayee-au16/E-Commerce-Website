import React from "react";
import HomePage from "./pages/homePage";
import { Route, Link } from "react-router-dom";
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
      <Link to="/hatsPage">HATS</Link>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/hatsPage" exact={true} component={hatsPage} />
    </div>
  );
};

export default App;
