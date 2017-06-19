import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import LandingSection from './LandingSection';
import AboutUsContainer from '../containers/AboutUsContainer';
import ProductsContainer from '../containers/ProductsContainer';

const App = props => {
  return(
    <div>
      <LandingSection />
      <EventsContainer />
      <AboutUsContainer />
      <ProductsContainer />
    </div>
  )
}

export default App;
