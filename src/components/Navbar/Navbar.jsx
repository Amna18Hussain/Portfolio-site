import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {

  const [menu, setMenu] = useState("home")
  return (
    <>
      <div  className="navbar">
      <IoMenu />
        <h2>Amna Hussain</h2>

        <ul className="nav-menu">
          <div className="nav-mob-close">
          <IoClose />
          </div>
         
          
          <li><AnchorLink className='anchor-link' offset={50} href='#home' > <p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
          <li> <AnchorLink className='anchor-link'offset={50} href='#about' ><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
          <li> <AnchorLink  className='anchor-link' offset={50} href='#service'><p onClick={() => setMenu("service")}>Services</p></AnchorLink></li>
          <li> <AnchorLink className='anchor-link'offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink></li>
          <li> <AnchorLink className='anchor-link'offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact' > 
          <p onClick={() => setMenu("contact")}>Connect With Me</p></AnchorLink>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;


