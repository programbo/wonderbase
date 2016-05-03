import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { toggleMainMenu } from '../../utils/actions';

const mapStateToProps = (state) => ({
  active: state.mainMenu
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(toggleMainMenu());
  }
});

const MenuToggleButton = ({ children, onClick, active }) => {
  const classes = classNames('menu-toggle-button', 'visible-xs-block', { active });
  return (
    <span className={classes} onClick={onClick}>
      {children}
    </span>
  );
};

MenuToggleButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuToggleButton);
