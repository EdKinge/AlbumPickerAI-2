import { useAuth } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log('protected route');
    console.log(currentUser);
  },[])

  if (!currentUser) {
    return <Navigate to="/" />
  } else {
    return children;
  }
}