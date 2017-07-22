import React, { Component } from 'react';
import AdminEventForm from '../components/AdminEventForm'

class AdminEventsContainer extends Component{
  render(){
    return(
      <div>
        <h1>I Will Show Events</h1>
        <AdminEventForm />
      </div>
    )
  }
}

export default AdminEventsContainer;
