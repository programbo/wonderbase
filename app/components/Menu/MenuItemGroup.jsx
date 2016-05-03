import React, { PropTypes } from 'react';
import classNames from 'classnames';

const MenuItemGroup = ({ children, className }) => (
  <div className={classNames('menu-item-group', `${className}-menu-item-group`)}>
    {children}
  </div>
);

MenuItemGroup.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default MenuItemGroup;
