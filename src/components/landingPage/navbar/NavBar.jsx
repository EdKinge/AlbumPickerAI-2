import { usePopup } from "../../../context/PopupContext";
import { CtaButton } from "../CtaButton";

export function NavBar({ featuresRef, desiredOutcomeRef, pricingRef }) {
  const { togglePopup } = usePopup();

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
      <div className="flex sticky top-0 text-2xl text-slate-300 h-24 border-b-4 border-zinc-500 bg-zinc-800">
        <div className="my-auto ml-4 w-1/3 mx-auto text-sky-600 cursor-pointer font-bold text-4xl">
          AlbumPickerAI
        </div>
        <div className="hidden md:flex justify-around w-full">
          <div onClick={() => handleFeaturesScroll()} className="my-auto cursor-pointer">Features</div>
          <div onClick={() => handleOutcomeScroll()} className="my-auto cursor-pointer">How it works</div>
          <div onClick={() => handlePricingScroll()} className="my-auto cursor-pointer">Pricing</div>
        </div>
        <div className="hidden md:block my-auto w-1/3">
          <CtaButton text="Get Started"/>
        </div>
        <div className="md:hidden my-auto mr-4 cursor-pointer" onClick={togglePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#cad5e2" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 10H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"/></svg>
        </div>
      </div>
    </>
  )
};