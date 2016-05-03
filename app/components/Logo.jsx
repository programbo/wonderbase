import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const Logo = ({ children, className, href }) => (
  <Link
    className={classNames('logo', className || 'default')}
    to={href || '/'}
  >
    <span className="logo-text">{children}</span>
  </Link>
);

Logo.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  href: PropTypes.string
};

export default Logo;
