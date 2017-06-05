import React from 'react';

const EventTile = props => {
  return(
    <div>
      <h1>{props.event.day}</h1>
      <p>{props.event.start_time}</p>
      <p>{props.event.end_time}</p>
      <p>{props.event.location}</p>
    </div>
  )
}

export default EventTile;
