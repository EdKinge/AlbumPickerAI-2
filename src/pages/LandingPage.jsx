import { NavBar } from "../components/landingPage/NavBar";
import { Hero } from "../components/landingPage/Hero";
import { Popup } from "../components/landingPage/Popup";
import { PopupProvider } from "../context/PopupContext";
import { KeyFeatures } from "../components/landingPage/KeyFeatures";

export default function LandingPage() {
  return(
    <>
      <div className="cursor-default font-main">
        <PopupProvider>
          <NavBar/>
          <Popup/>
        </PopupProvider>
        <Hero/>
        <KeyFeatures/>
      </div>
    </>
  )
}