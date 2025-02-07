import { signInWithGoogle, logOut, signInWithGithub } from "../firebase/authServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAuth = () => {
  const [ signedIn, setSignedIn ] = useState(false);

  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithGoogle()
    .then(() => {
      setSignedIn(true);
      navigate('/dashboard')
    })
    .catch(err => console.log(err.message))
  }

  const loginWithGithub = () => {
    signInWithGithub()
    .then(() => {
      setSignedIn(true);
      navigate('/dashboard')
    });
  }

  const logoutOfAuth = () => {
    logOut()
    .then(() => {
      setSignedIn(true);
      navigate('/')
    });
  }

  return { signedIn, loginWithGoogle, loginWithGithub, logoutOfAuth };
};
