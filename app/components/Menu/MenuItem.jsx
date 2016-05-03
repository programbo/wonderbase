import React from 'react';
import { IndexLink, Link as PageLink } from 'react-router';
import { connect } from 'react-redux';
import { deactivateMainMenu } from '../../utils/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => {
    dispatch(deactivateMainMenu());
  }
});

const MenuItem = ({ children, route, closeMenu }) => {
  function isExternalLink() {
    return route.match(/:\/\//);
  }

  function getExternalLink() {
    return (
      <a className="menu-item" href={route} target="_new">{children}</a>
    );
  }

  function getLocalLink() {
    const Link = (route === '/') ? IndexLink : PageLink;
    return (
      <Link
        activeClassName="menu-item--active"
        className="menu-item"
        onClick={closeMenu}
        to={route}
      >
        {children}
      </Link>
    );
  }

  return isExternalLink() ? getExternalLink() : getLocalLink();
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
