import { signInWithGoogle, signOutWithGoogle } from "../firebase/authServices";

export const useAuth = () => {
  const login = () => {
    signInWithGoogle();
  }

  const logout = () => {
    signOutWithGoogle();
  }

  return { login, logout };
};


