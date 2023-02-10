import React from "react";
import { CardStyle } from "./CardStyle";
import Logo3 from "../../assets/Ellipse9.svg"


const Card3 = () => {
    return (
        <CardStyle>
           <div className="cont">
           <img src={Logo3} alt="software" className="eng"/>
           <h1 className="text">Product Management</h1>
           <p className="text4">Articulating friendly user experience and intuitive<br/>
            product features into product delivery </p>
           </div>
           <a className="more" href="/">Learn More</a>
          
        </CardStyle>
    );
}

export default Card3;