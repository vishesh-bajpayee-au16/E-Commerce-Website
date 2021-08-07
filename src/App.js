import React from "react";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import SigninPage from "./pages/signin-signupPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/shop" exact={true} component={ShopPage} />
          <Route path="/signin" exact={true} component={SigninPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
