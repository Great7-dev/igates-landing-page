import React from "react";
import { Navstyle } from "./navBarStyle";
import Logo from "../../assets/Igates logo.png"





const NavBar = () => {

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    const containerTop = element.offsetTop;
    element.scrollIntoView({ behavior: "smooth",  top: containerTop });
  };

    return (
      <Navstyle>
      <div className="nav-container">
       <div className="name">
       <img src={Logo} alt="logo" className="gates"/>
        </div> 
      </div>
        <ul className="nav-links">
            <li><a href="#about" className="link" onClick={(e) => {
        e.preventDefault();
        scrollToElement("about");
      }}>About</a></li>
            <li><a href="#clients" className="link"onClick={(e) => {
        e.preventDefault();
        scrollToElement("clients");
      }}>Clients</a></li>
            <li><a href="#partners"className="link" onClick={(e) => {
        e.preventDefault();
        scrollToElement("partners");
      }}>Partners</a></li>
            <li><a href="#products" className="link" onClick={(e) => {
        e.preventDefault();
        scrollToElement("products");
      }}>Products</a></li>
        </ul>
        <button className="btn"><a href="#contact" className="link2" onClick={(e)=>{
          e.preventDefault();
          scrollToElement("contact");
        }}>Contact Us</a></button>
     </Navstyle>

    );
 }

export default NavBar;


// import React, from 'react';

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState('home');

//   const handleClick = (section) => {
//     setActiveSection(section);
//     scrollToSection(section);
//   };

  // const scrollToSection = (section) => {
  //   const target = document.querySelector(#${section});
  //   target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <button onClick={() => handleClick('home')}>Home</button>
//         </li>
//         <li>
//           <button onClick={() => handleClick('about')}>About</button>
//         </li>
//         <li>
//           <button onClick={() => handleClick('contact')}>Contact</button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const HomePage = () => {
//   return (
//     <div>
//       <Navbar />
//       <section id="home">
//         <h2>Home</h2>
//         <p>This is the home section</p>
//       </section>
//       <section id="about">
//         <h2>About</h2>
//         <p>This is the about section</p>
//       </section>
//       <section id="contact">
//         <h2>Contact</h2>
//         <p>This is the contact section</p>
//       </section>
//     </div>
//   );
// };

// export default HomePage;