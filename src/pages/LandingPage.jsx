import { NavBar } from "../components/landingPage/NavBar";
import { Hero } from "../components/landingPage/Hero";

export default function LandingPage() {
  return(
    <>
      <div className="cursor-default">
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </>
  )
}