import React, { PropTypes } from 'react';

const NavbarHeader = ({ children }) => (
  <div className="navbar-header">
    {children}
  </div>
);

NavbarHeader.propTypes = {
  children: PropTypes.any
};

export default NavbarHeader;
