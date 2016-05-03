import React, { PropTypes } from 'react';

const showMessage = (message) => (
  <section className="contact-status-message">
    {message}
  </section>
);

const ContactStatusMessage = ({ children, successful }) => (
  <div className="contact-status-message-wrapper">
    {successful && showMessage(children)}
  </div>
);

ContactStatusMessage.propTypes = {
  children: PropTypes.any,
  successful: PropTypes.bool
};

export default ContactStatusMessage;
