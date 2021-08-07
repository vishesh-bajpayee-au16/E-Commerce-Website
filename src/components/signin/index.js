import React, { useState } from "react";
import "./index.scss";
import FormInput from "../formInput";
import CustomButton from "../CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return null;
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          value={email}
          type="email"
          label="email"
          required
        />

        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          value={password}
          label="password"
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
