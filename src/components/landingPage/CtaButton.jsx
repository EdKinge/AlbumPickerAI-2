import { NavLink } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export function CtaButton({text}) {
  const { signedIn } = useAuth();

  return (
    <>
      <div className="px-4 pb-1 mt-1 w-fit my-auto text-center line-clamp-1 bg-sky-700 text-slate-300 rounded-lg cursor-pointer sm:text-xl lg:text-3xl hover:bg-sky-800">
        {
          signedIn ?
          <NavLink to="/login">
            {text}
          </NavLink> :
          <NavLink to="/dashboard">
            My dashboard
          </NavLink>
        }
      </div>
    </>
  )
};