import React, { PropTypes } from 'react';

const CarouselNavigation = ({ children }) => (
  <span className="carousel-navigation">{children}</span>
);

CarouselNavigation.propTypes = {
  children: PropTypes.any
};

export default CarouselNavigation;
