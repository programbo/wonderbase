import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleMainMenu } from '../utils/actions';
import { Menu, MenuItem, MenuItemGroup, MenuToggleButton } from './Menu';

const mapStateToProps = ({ mainMenu, routing }) => ({
  active: mainMenu,
  routing
});

const mapDispatchToProps = (dispatch) => ({
  onToggleClick: () => {
    dispatch(toggleMainMenu());
  }
});

// We are only using `routing` here to force Menu to update on route changes
const MainMenu = ({ active, routing }) => (
  <Menu active={active} className="main" routing={routing}>
    <MenuToggleButton>Menu</MenuToggleButton>
    <MenuItemGroup className="primary">
      <MenuItem route="/">Home</MenuItem>
      <MenuItem route="/about">About</MenuItem>
      <MenuItem route="/contact">Contact</MenuItem>
    </MenuItemGroup>
  </Menu>
);

MainMenu.propTypes = {
  active: PropTypes.bool,
  routing: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
