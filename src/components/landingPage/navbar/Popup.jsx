import { useState } from "react";
import { usePopup } from "../../../context/PopupContext";

export function Popup({ featuresRef, desiredOutcomeRef, pricingRef }) {
  const { open } = usePopup();

  const handleFeaturesScroll = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleOutcomeScroll = () => {
    desiredOutcomeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePricingScroll = () => {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {
        open ?
        <div className="flex-col w-full text-2xl md:hidden font-main text-slate-300 bg-slate-600 pl-2">
          <div className="my-auto cursor-pointer" onClick={handleFeaturesScroll}>Features</div>
          <div className="my-auto cursor-pointer" onClick={handleOutcomeScroll}>How it works</div>
          <div className="my-auto cursor-pointer" onClick={handlePricingScroll}>Pricing</div>
        </div>:
        <></>
      }
    </>
  )
}