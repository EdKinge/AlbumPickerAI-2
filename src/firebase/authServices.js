import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import {auth as initAuth } from "./firebaseConfig";

const provider = new GoogleAuthProvider();
const auth = initAuth();

export const signInWithGoogle = () => {
  const signIn = signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  return signIn;
};

export const signOutWithGoogle = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};
