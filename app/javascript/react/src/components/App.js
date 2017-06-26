import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import LandingSection from './LandingSection';
import AboutUsContainer from '../containers/AboutUsContainer';
import Footer from './Footer';


const App = props => {
  return(
    <div>
      <LandingSection />
      <EventsContainer />
      <AboutUsContainer />
      <Footer />
    </div>
  )
}

export default App;
