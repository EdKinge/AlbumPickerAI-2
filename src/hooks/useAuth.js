import { signInWithGoogle, logOut, signInWithGithub } from "../firebase/authServices";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    
    signInWithGoogle()
    .then(() => navigate('/dashboard'))
    .catch(err => console.log(err.message))
  }

  const loginWithGithub = () => {
    signInWithGithub()
    .then(() => navigate('/dashboard'));
  }

  const logoutOfAuth = () => {
    logOut()
    .then(() => navigate('/'));
  }

  return { loginWithGoogle, loginWithGithub, logoutOfAuth };
};
