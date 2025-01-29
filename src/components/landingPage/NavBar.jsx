import { useScreenWidth } from "../../hooks/useScreenWidth";
import { useEffect } from "react";
import { usePopup } from "../../context/PopupContext";

export function NavBar() {
  const { open, togglePopup } = usePopup();

  return (
    <>
      <div className="flex marker:sticky top-0 font-main text-2xl text-slate-300 h-24 border-b-4 border-zinc-500">
        <div className="my-auto ml-4 w-1/3 mx-auto text-sky-600 cursor-pointer font-bold text-4xl">
          AlbumPickerAI
        </div>
        <div className="hidden md:flex justify-around w-full">
          <div className="my-auto cursor-pointer">Features</div>
          <div className="my-auto cursor-pointer">Pricing</div>
          <div className="my-auto cursor-pointer">How it works</div>
        </div>
        <div className="hidden md:block mr-4 h-8 w-64 my-auto text-center py-auto bg-slate-300 text-sky-800 rounded-lg cursor-pointer">
          Get started
        </div>
        <div className="md:hidden my-auto mr-4 cursor-pointer" onClick={togglePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#cad5e2" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 10H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"/></svg>
        </div>
      </div>
    </>
  )
};