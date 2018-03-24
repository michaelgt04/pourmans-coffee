import React from 'react';
import EventTile from './EventTile';

const DayTile = ({ day, deleteEvent, events }) => {
  if (!events){
    events = [] 
  }

  let eventsArray = events.map(event => {
    const individualHandleDelete = () => { deleteEvent(event.id) };

    return(
      <EventTile 
        key={event.id} 
        id={event.id}
        day={event.day}
        handleDelete={individualHandleDelete}
        startTime={event.start_time}
        endTime={event.end_time}
        location={event.location}
        note={event.note}
      /> 
    ) 
  })
  
  return(
    <div>
      <h3>{day}</h3>
      {eventsArray}
    </div>
  )
}

export default DayTile;
