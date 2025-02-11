import { signInWithGoogle, logOut, signInWithGithub, isSignedIn } from "../firebase/authServices";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function useAuth() {
  const [ signedIn, setSignedIn ] = useState(null);

  useEffect(() => {
    const unsub = isSignedIn((user) => {
      setSignedIn(user);
    });

    return () => {
      if (unsub) unsub();
    }
  }, []);

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
