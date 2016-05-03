import React, { PropTypes } from 'react';

const Lightbox = ({ children }) => (
  <div className="lightbox-wrapper">
    <div className="lightbox">{children}</div>
  </div>
);

Lightbox.propTypes = {
  children: PropTypes.any.isRequired
};

export default Lightbox;
