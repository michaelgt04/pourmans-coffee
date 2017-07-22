import React from 'react';
import InstaFeedContainer from '../containers/InstaFeedContainer';
import Footer from './Footer';
import ScrollableAnchor from 'react-scrollable-anchor';


const ContactWrapper = props => {
  return(
    <div className="contact-section">
      <ScrollableAnchor id={"contact"} >
        <div className="contact-anchor"></div>
      </ScrollableAnchor>
      <InstaFeedContainer />
      <Footer />
    </div>
  )
}

export default ContactWrapper;
