import React from "react";
import { Introstyle } from "./introStyle";
import Logo from "../../assets/project.svg"


const Intro = () => {
    return (
        <Introstyle>
            <div className="intro-container">
            <div className="writeups">
            <h1 className="text">
               Let seasoned professionals <br/> bring your Idea to life
            </h1>
            <p className="text1">
            We’re a team of passionate, dependable and ever improving <br/>
            individuals. IGates got the best technical hands money can buy. 
            </p>
            <button className="btn">View Projects</button>
            </div>
            <div className="img">
            <img src={Logo} alt="project" />
                </div>

            </div>
        </Introstyle>
    );
}

export default Intro;