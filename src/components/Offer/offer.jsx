import React from "react";
import { Offerstyle } from "./offerStyle";
import Logo from "../../assets/Frame37.svg"
import Logo2 from "../../assets/Frame38.svg"
import Logo3 from "../../assets/Frame36.svg"
import Logo4 from "../../assets/Frame39.svg"
import Logo5 from "../../assets/Frame35.svg"


const Offer = () => {
    return(
        <Offerstyle>
            <div className="offer-container">
            <h1 className="head">What We Offer?</h1>
            </div>
            <div className="third">
            <div className="last">
            <p className="pm-text">CYBERSERCURITY</p>
            <img src={Logo5}  alt="uni" className="pm"/>
            <img src={Logo4} alt="uni" className="pm"/>
            <p className="pm-text1">CLOUD</p>
            </div>
            <p className="pm-text">SOFTWARE ENGINEERING</p>
            <img src={Logo3} alt="uni"/>
            <div className="last">
            <p className="pm-text">PRODUCT MANAGEMENT</p>
            <img src={Logo}  alt="uni" className="pm"/>
            <img src={Logo2} alt="uni" className="pm"/>
            </div>
            </div>
        </Offerstyle>
    );
}

export default Offer