import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminEventFormContainer from '../containers/AdminEventFormContainer'
import DayTile from '../components/DayTile';
import { getEvents } from '../actions/getEvents';
import { deleteEvent } from '../actions/deleteEvent';
import { getEventForEdit } from '../actions/patchEvent';

class AdminEventsContainer extends Component{
  componentDidMount(){
    this.props.getEvents() 
  }
  
  render(){
    const { deleteEvent, getEventForEdit, events } = this.props;
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let days = daysOfWeek.map(day => {
      return(
        <DayTile 
          key={day}
          day={day}
          events={events[day]} 
          deleteEvent={deleteEvent}
          getEventForEdit={getEventForEdit}
        /> 
      ) 
    })

    return(
      <div>
        <h2>Current Events:</h2>
        {days}
        <AdminEventFormContainer />
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
    deleteEvent: id => {
      dispatch(deleteEvent(id))
    },
    getEvents: () => {
      dispatch(getEvents()) 
    },
    getEventForEdit: id => {
      dispatch(getEventForEdit(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEventsContainer);
