import React from 'react';
import EventTile from './EventTile';

const DayTile = props => {
  let events = props.events
  
  if (!events){
    events = [] 
  }

  let eventsArray = events.map(event => {
    return(
      <EventTile 
        key={event.id} 
        id={event.id}
        day={event.day}
        startTime={event.start_time}
        endTime={event.end_time}
        location={event.location}
        note={event.note}
      /> 
    ) 
  })
  
  return(
    <div>
      <h3>{props.day}</h3>
      {eventsArray}
    </div>
  )
}

export default DayTile;
