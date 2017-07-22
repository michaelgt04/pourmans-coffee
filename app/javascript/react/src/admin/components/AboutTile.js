import React from 'react';

const AboutTile = props => {
  return(
    <div>
      <h2>About Us</h2>
      <p>{props.about.blurb}</p>
    </div>
  )
}

export default AboutTile;
