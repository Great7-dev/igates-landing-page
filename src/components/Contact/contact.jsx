import React from "react"
import { Contactstyle } from "./contactStyle"
import Logo from "../../assets/mail.svg"
import Logo2 from "../../assets/Group7.svg"
import Logo3 from "../../assets/Group8.svg"


const Contact = () => {
    return(
        <Contactstyle>
            <div className="contact" id="contact">
            <h1 className="head">Let's Build Something!</h1>
            <div className="main-container">
            <div className="input">
            <div className="icon-input">
                <div className="mail">
                <img src={Logo} alt="mail"className="icon"/>
                <p className="mail-text">info@igates.com.ng</p>
                </div>
                <div className="mail">
                <img src={Logo2} alt="mail"className="icon"/>
                <p className="mail-text">112 Aba Road Garrison, Port Harcourt</p>
                </div>
                <div className="mail">
            <img src={Logo3} alt="mail" className="icon"/>
            <p className="mail-text">+234816078932</p>
                </div>
            </div>
                <div className="input-cont">
                 <input className="name"type="text" placeholder="Name"/>
                <input className="name2" type="text" placeholder="Email"/>
                <input className="name3" type="text" placeholder="Message"/>
                </div>
            </div>
            <button className="btn">Send Message</button>
            <div className="footer">
            <h1 className="touch">Get in touch!</h1>
            <p className="touch2">Let seasoned professionals bring your idea to live...</p>
            </div>
            </div>
            </div>
        </Contactstyle>
    )
}

export default Contact