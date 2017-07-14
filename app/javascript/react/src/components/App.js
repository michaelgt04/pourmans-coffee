import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import LandingSection from './LandingSection';
import AboutUsContainer from '../containers/AboutUsContainer';
import ProductsContainer from '../containers/ProductsContainer';
import InstaFeedContainer from '../containers/InstaFeedContainer';
import Footer from './Footer';
import NavBar from '../containers/NavBar';
import anchorLinks from '../constants/anchorLinks';

const App = props => {
  return(
    <div>
      <NavBar links={anchorLinks}/>
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
