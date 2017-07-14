import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/getEvents';
import DayTile from '../components/DayTile';

class EventsContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render(){
    let eventDays = [];
    let events = this.props.events;

    for(var day in events) {

      let dayTile =
        <DayTile
          key={day}
          events={events[day]}
          day={day}
        />

      eventDays.push(dayTile)
    }

    return(
      <div className="events-section">
        <h2 className="events-header">Where to Find Us</h2>
        <div className="row">
          {eventDays}
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    events: state.events
  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
