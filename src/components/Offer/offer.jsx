import React from "react";
import { Offerstyle } from "./offerStyle";
import Logo from "../../assets/Rectangle10.svg"
import Logo2 from "../../assets/Rectangle12.svg"
import Logo3 from "../../assets/Rectangle9.svg"
import Logo4 from "../../assets/Rectangle11.svg"
import Logo5 from "../../assets/Rectangle8.svg"
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import Card3 from "../Card/Card3";
import Card4 from "../Card/Card4";


const Offer = () => {
    return(
        <Offerstyle>
            <div className="offer-container">
            <h1 className="head">What We Offer?</h1>
            </div>
            <div className="grid-container">
                <Card/>
                <Card2/>
                <Card3/>
                <Card4/>
            </div>
        </Offerstyle>
    );
}

export default Offer