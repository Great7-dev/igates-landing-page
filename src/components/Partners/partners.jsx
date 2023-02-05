import React from "react";
import { Partnerstyle } from "./partnerStyle";
import Logo from "../../assets/SYTYCC.svg"
import Logo2 from "../../assets/inven3.svg"
import Logo3 from "../../assets/cardstel.svg"

const Partners = () => {
    return (
        <Partnerstyle>
            <div className="partners-container">
                <h1 className="patne">Our Trusted Partners</h1>
            <div className="logo-container">
              <div className="SYTYCC">
                <img src={Logo} alt="SYTYCC" className="lg"/>
              </div>
              <div className="inven">
                <img src={Logo2} alt="inven3" className="lg2"/>
              </div>
              <div className="inven">
                <img src={Logo3} alt="cardstel" className="lg3"/>
              </div>
              <div className="inven">
                <img src={Logo3} alt="cardstel" className="lg3"/>
              </div>
            </div>
            </div>
        </Partnerstyle>
    );
}

export default Partners;