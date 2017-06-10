import React, { Component } from 'react';

class LandingSection extends Component {

  render(){
    return(
      <div className='landing-section '>
        <img className='logo' src='https://res.cloudinary.com/duor0bzmo/image/upload/v1496790582/Pourman_s_Logo_yzyag0.png' />
        <i className="fa fa-chevron-down nav-down" aria-hidden="true"></i>
      </div>
    )
  }
}

export default LandingSection;
