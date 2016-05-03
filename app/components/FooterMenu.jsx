import React from 'react';
import { Menu, MenuItem, MenuItemGroup } from './Menu';

const FooterMenu = () => (
  <Menu className="footer">
    <MenuItemGroup className="first">
      <MenuItem route="/">Home</MenuItem>
      <MenuItem route="/about">About</MenuItem>
      <MenuItem route="/contact">Contact</MenuItem>
    </MenuItemGroup>
  </Menu>
);

export default FooterMenu;
