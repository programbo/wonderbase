import React, { PropTypes } from 'react';

const Content = ({ children }) => (
  <div className="content-wrapper">
    <div className="content">
      {children}
    </div>
  </div>
);

Content.propTypes = {
  children: PropTypes.any.isRequired
};

export default Content;
