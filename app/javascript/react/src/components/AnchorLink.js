import React from 'react';

const AnchorLink = props => {
  return(
    <a className={props.selectedClass} onClick={props.handleClick} href={`${props.anchor}`}>
      <div>{props.text}</div>
    </a>
  )
}

export default AnchorLink;
