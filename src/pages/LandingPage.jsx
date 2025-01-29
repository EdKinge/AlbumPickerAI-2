import { NavBar } from "../components/landingPage/NavBar";
import { Hero } from "../components/landingPage/Hero";
import { Popup } from "../components/landingPage/Popup";
import { PopupProvider } from "../context/PopupContext";

export default function LandingPage() {
  return(
    <>
      <div className="cursor-default">
        <PopupProvider>
          <NavBar></NavBar>
          <Popup></Popup>
          <Hero></Hero>
        </PopupProvider>
      </div>
    </>
  )
}