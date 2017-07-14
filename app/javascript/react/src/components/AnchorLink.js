import React from 'react';

const AnchorLink = props => {
  return(
    <a href={`${props.anchor}`}><div>{props.text}</div></a>
  )
}

export default AnchorLink;
