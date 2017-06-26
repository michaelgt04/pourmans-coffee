import React from 'react';

const Footer = props => {
  return(
    <div className="footer">
      <h4 className="contact-header">We'd love to hear from you!</h4>
      <p className="contact-tagline">Drop us a line or follow us on social media</p>
      <div className="contact-icons">
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i><br/>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        <span className="email">pourmanscoffee@gmail.com</span><br />
        <i className="fa fa-phone" aria-hidden="true"></i>
        <span className="phone"> 781 439 7245 </span>
      </div>
    </div>
  )
}

export default Footer;
