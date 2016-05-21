import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, NavbarHeader, NavbarCollapse, NavbarToggle, NavbarBrand } from '../Navbar';

const SiteHeader = () => (
  <Navbar className="mainmenu">
    <NavbarHeader>
      <NavbarToggle menuId="mainmenu-links"/>
      <NavbarBrand logo={'images/logo.png'} menuId="mainmenu-links">
        XXX
      </NavbarBrand>
    </NavbarHeader>
    <NavbarCollapse align="right" menuId="mainmenu-links">
      <li>
        <IndexLink to="/">Home</IndexLink>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </NavbarCollapse>
  </Navbar>
);

export default SiteHeader;
