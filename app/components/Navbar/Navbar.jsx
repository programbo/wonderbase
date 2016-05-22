import React, { PropTypes } from 'react';
import classNames from 'classnames';

const NavBar = ({ children, className }) => {
  const classes = classNames('navbar', 'navbar-default', `navbar-${className}`);
  return (
    <nav className={classes}>
      <div className="container">
        {children}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default NavBar;
