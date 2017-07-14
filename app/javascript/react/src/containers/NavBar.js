import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectAnchor } from '../actions/selectAnchor';
import { configureAnchors } from 'react-scrollable-anchor';
import anchorLinks from '../constants/anchorLinks';

class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let anchorLinks = {anchorLinks}
    debugger;
    let links = anchorlinks.map(link => {
      return(
        <AnchorLink
          key={link.anchor}
          anchor={link.anchor}
          text={link.text}
        />
      )
    })
    // let links = "hi"
    return(
      <div className="navbar">
        <ul className="links">
          {links}
        </ul>
      </div>
    )

  }

// const NavBar = props => {
//   configureAnchors({scrollDuration: 800})
//   return(
//     <div className="navbar">
//       <ul className="links">
//         <a href="#home"><div>Home</div></a>
//         <a href="#find-us"><div>Find Us</div></a>
//         <a href="#about"><div>About</div></a>
//         <a href="#products"><div>Products</div></a>
//         <a href="#instagram"><div>Instagram</div></a>
//         <a href="#contact"><div>Contact</div></a>
//
//       </ul>
//     </div>
//   )
}

export default NavBar;
