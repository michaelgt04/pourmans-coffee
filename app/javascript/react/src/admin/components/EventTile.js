import React from 'react';

const EventTile = ({ endTime, handleDelete, location, note, startTime }) => {
  return(
    <div>
      <span><strong>{location}</strong></span>
      <span>Start Time: {startTime}</span>
      <span>End Time: {endTime}</span>
      <span>Note: {note}</span>
      <span onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default EventTile;
