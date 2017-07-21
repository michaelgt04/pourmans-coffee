import React from 'react';
import { Link } from 'react-router';

const AdminInterface = props => {

  return(
    <div>
      <h1>Pourmans Admin Interface</h1>
      <Link to='/admin'>Home</Link>
      <Link to='/admin/events'>Events</Link>
      {props.children}
    </div>
  )
}

export default AdminInterface;
