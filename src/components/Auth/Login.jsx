import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  return (
  <>
    <div onClick={login}>
      Login
    </div>
  </>
  );
}