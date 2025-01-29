import { useState } from "react";
import { usePopup } from "../../context/PopupContext";

export function Popup() {
  const { open } = usePopup();

  return (
    <>
      {
        open ?
        <div>
          Crazy popup
        </div> :
        <></>
      }
    </>
  )
}