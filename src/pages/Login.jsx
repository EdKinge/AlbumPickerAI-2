import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  return (
  <>
    <div className="flex justify-center h-screen">
      <div onClick={login} className="font-main px-8 pb-1 w-fit my-auto text-center line-clamp-1 bg-sky-800 text-slate-300 rounded-lg cursor-pointer sm:text-2xl lg:text-3xl hover:bg-sky-600">
        Login
      </div>
    </div>
  </>
  );
}