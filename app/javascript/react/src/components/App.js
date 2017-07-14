import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import LandingSection from './LandingSection';
import AboutUsContainer from '../containers/AboutUsContainer';
import ProductsContainer from '../containers/ProductsContainer';
import InstaFeedContainer from '../containers/InstaFeedContainer';
import Footer from './Footer';
import NavBar from './NavBar';

const App = props => {
  return(
    <div>
      <NavBar />
      <LandingSection />
      <EventsContainer />
      <AboutUsContainer />
      <ProductsContainer />
      <InstaFeedContainer />
      <Footer />
    </div>
  )
}

export default App;
