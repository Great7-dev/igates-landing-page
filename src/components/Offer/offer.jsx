import React from "react";
import { Offerstyle } from "./offerStyle";
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