import { useState } from "react";
import { usePopup } from "../../context/PopupContext";

export function Popup() {
  const { open } = usePopup();

  return (
    <>
      {
        open ?
        <div className="flex-col w-full text-2xl md:hidden font-main text-slate-300 bg-slate-600 pl-2">
          <div className="my-auto cursor-pointer">Features</div>
          <div className="my-auto cursor-pointer">Pricing</div>
          <div className="my-auto cursor-pointer">How it works</div>
        </div>:
        <></>
      }
    </>
  )
}