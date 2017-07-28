import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
const Footer = props => {
  return(
    <div className="footer">
      <h4 className="contact-header">We'd love to hear from you!</h4>
      <p className="contact-tagline">Drop us a line or follow us on social media</p>
      <div className="contact-icons">
        <a href="https://www.facebook.com/Pour-Mans-Coffee-703671936360834/">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/pourmanscoffee/">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <br/>
        <a href="mailto:pourmanscoffee@gmail.com">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <span className="email">pourmanscoffee@gmail.com</span><br />
        </a>
        <i className="fa fa-phone" aria-hidden="true"></i>
        <span className="phone"> (781) 439-7245</span>
      </div>
    </div>
  )
}

export default Footer;
