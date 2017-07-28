import React from 'react';
import EventTile from './EventTile';

const DayTile = props => {
  let eventTiles = props.events.map(event => {
    return(
      <EventTile
        key={event.id}
        event={event}
      />
    )
  });
  return(
    <div className="columns small-12 medium-3 end">
      <div className="day-tile-background">
        <h3>{props.day}</h3>
        <div>
          {eventTiles}
        </div>
      </div>
    </div>
  )
}


export default DayTile;
