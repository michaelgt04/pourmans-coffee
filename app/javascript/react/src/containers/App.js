import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/getEvents';
import EventTile from '../components/EventTile';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render(){
    let events = this.props.events.map(event => {
      return(
        <EventTile
          event={event}
          key={event.id}
        />
      )
    })
    return(
      <div>
        {events}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
