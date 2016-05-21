import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-default mainmenu">
    <div className="container">
      <div className="navbar-header">
        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#mainmenu-links" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <a href="/" className="navbar-brand">
          <img src="images/logo.png" alt="XXX" className="navbar-brand-logo"/>
          XXX
        </a>
      </div>
      <div id="mainmenu-links" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">Page 1</a>
          </li>
          <li>
            <a href="#">Page 2</a>
          </li>
          <li>
            <a href="#">Page 3</a>
          </li>
          <li>
            <a href="#">Page 4</a>
          </li>
          <li>
            <a href="#">Page 5</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// NavBar.propTypes = {
//   active: PropTypes.bool,
//   children: PropTypes.any,
//   className: PropTypes.string
// };

export default NavBar;
