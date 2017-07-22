import React from 'react';

const EventTile = props => {
  return(
    <div>
      <span><strong>{props.location}</strong></span>
      <span>Start Time: {props.startTime}</span>
      <span>End Time: {props.endTime}</span>
    </div>
  )
}

export default EventTile;
