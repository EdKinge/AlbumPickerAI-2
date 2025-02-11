import { useRef } from "react";
import { NavBar } from "../components/landingPage/navbar/NavBar";
import { Hero } from "../components/landingPage/Hero";
import { Popup } from "../components/landingPage/navbar/Popup";
import { PopupProvider } from "../context/PopupContext";
import { DesiredOutcome } from "../components/landingPage/DesiredOutcome";
import TargetSelection from "../components/common/TargetSelection";
import { KeyFeatures } from "../components/landingPage/KeyFeatures";
import { Pricing } from "../components/landingPage/Pricing";
import { Footer } from "../components/landingPage/Footer";

export default function LandingPage() {
  const featuresRef = useRef(null);
  const desiredOutcomeRef = useRef(null);
  const pricingRef = useRef(null);

  return(
    <>
      <div className="cursor-default font-main">
        <PopupProvider>
          <NavBar featuresRef={featuresRef} desiredOutcomeRef={desiredOutcomeRef} pricingRef={pricingRef}/>
          <Popup featuresRef={featuresRef} desiredOutcomeRef={desiredOutcomeRef} pricingRef={pricingRef}/> 
        </PopupProvider>
        <Hero/>
        <TargetSelection ref={featuresRef}>
          <KeyFeatures />
        </TargetSelection>
        <TargetSelection ref={desiredOutcomeRef}>
          <DesiredOutcome />
        </TargetSelection>
        <TargetSelection ref={pricingRef}>
          <Pricing />
        </TargetSelection>
        <Footer />
      </div>
    </>
  )
}