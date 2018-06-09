import React from 'react';

const EventTile = props => {
  const { event } = props;

  return(
    <div className="event-tile">
      <p>{event.start_time} — {event.end_time}</p>
      <p>{event.location}</p>
      { event.note && <p className="note">Note: {event.note}</p>}
    </div>
  )
}

export default EventTile;
