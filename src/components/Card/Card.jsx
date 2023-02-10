import React from "react";
import { CardStyle } from "./CardStyle";
import Logo from "../../assets/Ellipse7.svg"


const Card = () => {
    return (
        <CardStyle>
           <div className="cont">
           <img src={Logo} alt="software" className="eng"/>
           <h1 className="text">Software Engineering</h1>
           <p className="text2">Analyzing user requirement, designing,<br/>
            building and testing software applications</p>
           </div>
           <a className="more" href="/">Learn More</a>
          
        </CardStyle>
    );
}

export default Card;