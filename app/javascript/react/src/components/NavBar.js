import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor'

const NavBar = props => {
  configureAnchors({scrollDuration: 800})
  return(
    <div className="navbar">
      <ul className="links">
        <a href="#home"><div>Home</div></a>
        <a href="#find-us"><div>Find Us</div></a>
        <a href="#about"><div>About</div></a>
        <a href="#products"><div>Products</div></a>
        <a href="#instagram"><div>Instagram</div></a>
        <a href="#contact"><div>Contact</div></a>

      </ul>
    </div>
  )
}

export default NavBar;
