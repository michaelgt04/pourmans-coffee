import React from 'react';

const AboutTile = props => {
  let blurb = props.about.blurb
  return(
    <div className="overlay">
      <div className="about-text">
        <h2>About Us</h2>
        <p>{blurb}</p>
      </div>
    </div>
  )
}

export default AboutTile;
