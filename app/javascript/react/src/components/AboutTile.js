import React from 'react';

const AboutTile = props => {
  debugger;
  let blurb = props.about.blurb
  return(
    <div>
      <h2>About Us</h2>
      <p>{blurb}</p>
    </div>
  )
}

export default AboutTile;
