import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';

const Breadcrumbs = ({ route: { name } }) => (
  <div className="breadcrumbs-wrapper">
    <nav className="breadcrumbs">
      <IndexLink className="crumb" to="/">
        <span className="crumb-text">Home</span>
      </IndexLink>
      <span className="crumb">{name}</span>
    </nav>
  </div>
);

Breadcrumbs.propTypes = {
  route: PropTypes.object.isRequired
};

export default Breadcrumbs;
