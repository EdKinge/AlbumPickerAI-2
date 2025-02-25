import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, getAuth, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import {auth } from "./firebaseConfig";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  const signIn = signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   console.log(error);
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorMessage);
  //   // The email of the user's account used.
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });

  return signIn;
};

export const signInWithGithub = () => {
  const provider = new GithubAuthProvider();

  const signIn = signInWithPopup(auth, provider)
  .then(() => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });

  return signIn;
};

export const logOut = () => {
  return signOut(auth);
};

export const isSignedIn = (callback) => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(true);
    }
    else {
      callback(false);
    }
  });

};
