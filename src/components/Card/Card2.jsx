import React from "react";
import { CardStyle } from "./CardStyle";
import Logo2 from "../../assets/Ellipse8.svg"


const Card2 = () => {
    return (
        <CardStyle>
           <div className="cont">
           <img src={Logo2} alt="software" className="eng"/>
           <h1 className="text">Cyber Security</h1>
           <p className="text3">Defending computer, servers, mobile devices,<br/>
            electronic systems, networks, and data from <br/>
            malicious cyber attacks</p>
           </div>
           <a className="more" href="#">Learn More</a>
          
        </CardStyle>
    );
}

export default Card2;