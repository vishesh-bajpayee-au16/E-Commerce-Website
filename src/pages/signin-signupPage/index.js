import React from "react";
import "./index.scss";
import SignIn from "../../components/signin";
import Signup from "../../components/sign-up";
const signinPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default signinPage;
