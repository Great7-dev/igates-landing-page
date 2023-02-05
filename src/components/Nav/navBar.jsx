import React from "react";
import { Navstyle } from "./navBarStyle";


const NavBar = () => {
    return (
        <Navstyle>
      <div className="nav-container">
       <div className="name">
        <h1>i</h1><h1 className="gates">Gates</h1>
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