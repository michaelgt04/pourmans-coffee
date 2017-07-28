import React from 'react';
import NavBar from '../containers/NavBar';
import LandingSection from './LandingSection';
import EventsContainer from '../containers/EventsContainer';
import AboutUsContainer from '../containers/AboutUsContainer';
import ProductsContainer from '../containers/ProductsContainer';
import ContactWrapper from './ContactWrapper';
import anchorLinks from '../constants/anchorLinks';

const App = props => {
  return(
    <div>
      <NavBar links={anchorLinks}/>
      <LandingSection />
      <EventsContainer />
      <AboutUsContainer />
      <ProductsContainer />
      <ContactWrapper />
    </div>
  )
}

export default App;
