import { useRef } from "react";
import { NavBar } from "../components/landingPage/NavBar";
import { Hero } from "../components/landingPage/Hero";
import { Popup } from "../components/landingPage/Popup";
import { PopupProvider } from "../context/PopupContext";
import { DesiredOutcome } from "../components/landingPage/DesiredOutcome";
import TargetSelection from "../components/common/TargetSelection";
import { KeyFeatures } from "../components/landingPage/KeyFeatures";

export default function LandingPage() {
  const featuresRef = useRef(null);
  const desiredOutcomeRef = useRef(null);
  const pricingRef = useRef(null);

  return(
    <>
      <div className="cursor-default font-main">
        <PopupProvider>
          <NavBar featuresRef={featuresRef} desiredOutcomeRef={desiredOutcomeRef} pricingRef={pricingRef}/>
          <Popup/>
        </PopupProvider>
        <Hero/>
        <TargetSelection ref={featuresRef}>
          <KeyFeatures />
        </TargetSelection>
        <TargetSelection ref={desiredOutcomeRef}>
          <DesiredOutcome />
        </TargetSelection>
        <TargetSelection ref={pricingRef}>
          {/* Pricing */}
        </TargetSelection>
      </div>
    </>
  )
}