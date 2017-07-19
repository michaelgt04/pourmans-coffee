import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/getEvents';
import ScrollableAnchor from 'react-scrollable-anchor';
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
        <ScrollableAnchor id={"find-us"}>
          <div className="events-anchor"></div>
        </ScrollableAnchor>
          <h2 className="events-header">Where to Find Us</h2>
        <div className="row days-wrapper">
          {eventDays}
        </div>
        <img src="https://res.cloudinary.com/duor0bzmo/image/upload/v1500430017/flamingo_ds9qj7.png" className="flamingo hide-for-small-only" />
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
