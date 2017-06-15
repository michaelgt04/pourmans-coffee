import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import LandingSection from './LandingSection';
import AboutUsContainer from '../containers/AboutUsContainer';

const App = props => {
  return(
    <div>
      <LandingSection />
      <EventsContainer />
      <AboutUsContainer />
    </div>
  )
}

export default App;
