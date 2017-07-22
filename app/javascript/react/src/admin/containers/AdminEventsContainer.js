import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminEventForm from '../components/AdminEventForm'
import DayTile from '../components/DayTile';
import { getEvents } from '../actions/getEvents';

class AdminEventsContainer extends Component{
  componentDidMount(){
    this.props.getEvents() 
  }
  
  render(){
    let events = this.props.events
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let days = daysOfWeek.map(day => {
      return(
        <DayTile 
          key={day}
          day={day}
          events={events[day]} 
        /> 
      ) 
    })

    return(
      <div>
        <h2>Current Events:</h2>
        {days}
        <AdminEventForm />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return{
    events: state.events 
  }
}

let mapDispatchToProps = dispatch => {
  return{
    getEvents: () => {
      dispatch(getEvents()) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEventsContainer);
