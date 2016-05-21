import React, { PropTypes } from 'react';
import classNames from 'classnames';

const NavbarCollapse = ({ children, menuId, align }) => (
  <div id={menuId} className="collapse navbar-collapse">
    <ul className={classNames('nav', 'navbar-nav', `navbar-${align || 'right'}`)}>
      {children}
    </ul>
  </div>
);

NavbarCollapse.propTypes = {
  children: PropTypes.any,
  menuId: PropTypes.string,
  align: PropTypes.string
};

export default NavbarCollapse;
