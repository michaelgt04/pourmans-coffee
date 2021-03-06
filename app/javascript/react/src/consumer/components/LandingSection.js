import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class LandingSection extends Component {

  render(){
    return(
      <div className='landing-section '>
        <ScrollableAnchor id={"home"}>
          <div className="landing-anchor">
          </div>
        </ScrollableAnchor>
        <img className='logo' src='https://res.cloudinary.com/duor0bzmo/image/upload/v1496790582/Pourman_s_Logo_yzyag0.png' />
        <a href="#find-us" className="down-arrow-link">
          <i className="fa fa-chevron-down nav-down" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
}

export default LandingSection;
