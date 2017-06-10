import React from 'react';

const EventTile = props => {
  return(
    <div className="event-tile">
      <p>{props.event.start_time} — {props.event.end_time}</p>
      <p>{props.event.location}</p>
    </div>
  )
}

export default EventTile;
