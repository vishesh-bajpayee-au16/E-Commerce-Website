import React from "react";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import SigninPage from "./pages/signin-signupPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/actions/userActions";
import { connect } from "react-redux";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
