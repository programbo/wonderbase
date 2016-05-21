import React, { PropTypes } from 'react';

const NavbarLogo = ({ altText, logo }) => (
  <img src={logo} alt={altText} className="navbar-brand-logo"/>
);

NavbarLogo.propTypes = {
  altText: PropTypes.string,
  logo: PropTypes.string
};

export default NavbarLogo;
