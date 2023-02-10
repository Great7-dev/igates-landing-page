import React from "react";
import { CardStyle } from "./CardStyle";
import Logo4 from "../../assets/Ellipse10.svg"


const Card4 = () => {
    return (
        <CardStyle>
           <div className="cont">
           <img src={Logo4} alt="software" className="eng"/>
           <h1 className="text">Cloud</h1>
           <p className="text5">Designing/engineering and management cloud<br/>
            computing and services</p>
           </div>
           <a className="more" href="/">Learn More</a>
          
        </CardStyle>
    );
}

export default Card4;