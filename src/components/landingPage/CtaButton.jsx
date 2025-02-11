import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export function CtaButton({text}) {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="px-4 pb-1 mt-1 w-fit my-auto text-center line-clamp-1 bg-sky-700 text-slate-300 rounded-lg cursor-pointer sm:text-xl lg:text-3xl hover:bg-sky-800">
        {
          currentUser ?
          <NavLink to="/dashboard">
            My dashboard
          </NavLink> :
          <NavLink to="/login">
            {text}
          </NavLink>
        }
      </div>
    </>
  )
};