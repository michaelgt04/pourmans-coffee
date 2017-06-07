import React from 'react';

const EventTile = props => {
  return(
    <div className="columns small-12 medium-6 event-tile">
      <div className="event-tile-background">
        <h3>{props.event.day}</h3>
        <p>{props.event.start_time} — {props.event.end_time}</p>
        <p>{props.event.location}</p>
      </div>
    </div>
  )
}


export default EventTile;
