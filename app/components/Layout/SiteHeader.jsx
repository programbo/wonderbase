import React from 'react';
import Logo from '../Logo';
import MainMenu from '../MainMenu';

const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header-content">
      <MainMenu/>
      <div className="logos">
        <Logo>XXX</Logo>
      </div>
    </div>
  </header>
);

export default SiteHeader;
