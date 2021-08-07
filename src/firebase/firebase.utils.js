import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNypSBwTYFAg4r53Ti9hOzVpZfwQsF7So",
  authDomain: "e-commerce-website-447a5.firebaseapp.com",
  projectId: "e-commerce-website-447a5",
  storageBucket: "e-commerce-website-447a5.appspot.com",
  messagingSenderId: "799537513302",
  appId: "1:799537513302:web:2030dcb060b2d7e6818cf7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // if user not exists, create a user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
 
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error occured", error);
    }
  }

  console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
