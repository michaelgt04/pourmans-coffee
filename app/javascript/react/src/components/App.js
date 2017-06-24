import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import LandingSection from './LandingSection';
import AboutUsContainer from '../containers/AboutUsContainer';
import InstaFeedContainer from '../containers/InstaFeedContainer';

const App = props => {
  return(
    <div>
      <LandingSection />
      <EventsContainer />
      <AboutUsContainer />
      <InstaFeedContainer />
    </div>
  )
}

export default App;
