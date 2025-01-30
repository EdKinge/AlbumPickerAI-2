import { NavLink } from "react-router-dom"

export function CtaButton({text}) {
  return (
    <>
      <div className="px-4 pb-1 mt-1 w-fit my-auto text-center line-clamp-1 bg-sky-800 text-slate-300 rounded-lg cursor-pointer sm:text-2xl lg:text-3xl hover:bg-sky-600">
        <NavLink to="/login">
          {text}
        </NavLink>
      </div>
    </>
  )
};