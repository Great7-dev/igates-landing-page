import React from "react";
import About from "../../components/About/about";
import Contact from "../../components/Contact/contact";
import Intro from "../../components/Intro/intro";
import NavBar from "../../components/Nav/navBar";
import Offer from "../../components/Offer/offer";
import Partners from "../../components/Partners/partners";
import Worked from "../../components/Worked/worked";
import { Landingpagestyle } from "./landingPageStyle";


const LandingPage = () => {
    return (
      <Landingpagestyle>
        <NavBar/>
        <Intro/>
        <Partners/>
        <About/>
        <Worked/>
        <Offer/>
        <Contact/>
      </Landingpagestyle>
    );
}

export default LandingPage;