import React, { PropTypes } from 'react';

const NavbarToggle = ({ menuId }) => (
  <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target={`#${menuId}`} aria-expanded="false">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"/>
    <span className="icon-bar"/>
    <span className="icon-bar"/>
  </button>
);

NavbarToggle.propTypes = {
  menuId: PropTypes.string
};

export default NavbarToggle;
