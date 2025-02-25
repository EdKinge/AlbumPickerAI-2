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
    .catch((err) => {
      console.log(err.message);
    });
  }

  const loginWithGithub = () => {
    signInWithGithub()
    .then(() => {
      console.log('working');
      setSignedIn(true);
      navigate('/dashboard');
      console.log('navigated');
    })
    .catch((err) => {
      console.log(err.message);
    })
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
