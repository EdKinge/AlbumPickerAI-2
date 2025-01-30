import { signInWithGoogle, signOutWithGoogle } from "../firebase/authServices";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = () => {
    signInWithGoogle()
    .then(() => navigate('/dashboard'));
  }

  const logout = () => {
    signOutWithGoogle();
  }

  return { login, logout };
};
