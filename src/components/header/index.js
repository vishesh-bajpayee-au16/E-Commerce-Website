import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import "./index.scss";
const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>

        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGNOUT
          </div>
        ) : (
          <Link className="option" to="signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
