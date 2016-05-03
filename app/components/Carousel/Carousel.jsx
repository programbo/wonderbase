import React, { PropTypes } from 'react';

const Carousel = ({ children }) => (
  <div className="carousel">{children}</div>
);

Carousel.propTypes = {
  children: PropTypes.any
};

export default Carousel;
