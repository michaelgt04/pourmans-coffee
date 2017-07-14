import React from 'react';

const AnchorLink = props => {
  return(
    <a href={`${props.anchor}`}>
      <div onClick={props.handleClick} className={props.selectedClass}>{props.text}</div>
    </a>
  )
}

export default AnchorLink;
