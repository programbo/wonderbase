import React, { PropTypes } from 'react';
import NavbarLogo from './NavbarLogo';

import { IndexLink } from 'react-router';

const NavbarBrand = ({ children, logo }) => (
  <IndexLink to="/" className="navbar-brand">
    {logo && <NavbarLogo altText={children} logo={logo}/>}
    {children}
  </IndexLink>
);

NavbarBrand.propTypes = {
  children: PropTypes.string,
  logo: PropTypes.string
};

export default NavbarBrand;
