import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Menu = ({ children, className, active }) => {
  const wrapperClasses = classNames('menu-wrapper', `${className}-menu-wrapper`);
  const navClasses = classNames('menu', `${className}-menu`, { 'menu--active': active });
  return (
    <div className={wrapperClasses}>
      <nav className={navClasses}>{children}</nav>
    </div>
  );
};

Menu.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};

export default Menu;
