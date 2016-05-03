import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { deactivateLightbox, deactivateMainMenu } from '../../utils/actions';
import classNames from 'classnames';

const mapStateToProps = (state) => ({
  active: state.lightbox || state.mainMenu
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(deactivateLightbox());
    dispatch(deactivateMainMenu());
  }
});

const Shade = ({ active, onClick }) => (
  <div className={classNames('shade', { active })} onClick={onClick}/>
);

Shade.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shade);
