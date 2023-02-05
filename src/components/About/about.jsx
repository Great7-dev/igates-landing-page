import React from 'react';
import { Aboutstyle } from './aboutStyle';
import Logo from "../../assets/about.svg"

const About = () => {
  return (
    <Aboutstyle>
        <div className='about-container'>
        <h1 className='abt-text'>What We’re About?</h1>
        </div>
        <div className='img-text'>
        <img src={Logo} alt="about" />
        <div className='texts'>
        <p className='text1'>
        i-Gates Systems Limited is a Next Generation Technology Services <br/>
        Provider, specializing solutions development and general information <br/>
        communication and technology services.
        </p>
        <p className='text2'>
        We provide bespoke solutions tailored to meet specific requirements <br/>
        of our clients.
        </p>
        </div>
        </div>
    </Aboutstyle>
  )
}

export default About
