import React from "react";
import { Navstyle } from "./navBarStyle";
import Logo from "../../assets/Igates logo.png"


const NavBar = () => {
    return (
        <Navstyle>
      <div className="nav-container">
       <div className="name">
       <img src={Logo} alt="logo" className="gates"/>
        </div> 
      </div>
        <ul className="nav-links">
            <li>About</li>
            <li >Clients</li>
            <li >Patners</li>
            <li >Product</li>
        </ul>
        <button className="btn">Contact Us</button>
     </Navstyle>
    );
 }

export default NavBar;