import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import LandingSection from './LandingSection';

const App = props => {
  return(
    <div>
      <LandingSection />
      <EventsContainer />
    </div>
  )
}

export default App;
