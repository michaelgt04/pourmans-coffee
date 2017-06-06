import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import Puppies from './containers/Puppies';
import EventsContainer from './containers/EventsContainer';

const Root = props => {
  return(
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={EventsContainer} />
      </Router>
    </Provider>
  )
}

export default Root;
