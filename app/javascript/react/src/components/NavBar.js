import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor'

const NavBar = props => {
  configureAnchors({scrollDuration: 800})

  return(
    <div className="navbar">
      <ul className="links">
        <li><a href="#home">Home</a></li>
        <li><a href="#find-us">Find Us</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#instagram">Instagram</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default NavBar;
