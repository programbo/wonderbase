import React, { PropTypes } from 'react';

const Copyright = ({ children }) => (
  <div className="copyright">{children}</div>
);

Copyright.propTypes = {
  children: PropTypes.any.isRequired
};

export default Copyright;
