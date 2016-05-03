import React from 'react';
import Logo from '../Logo';
import MainMenu from '../MainMenu';

const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header-content container">
      <MainMenu/>
      <Logo>Wonderbase</Logo>
    </div>
  </header>
);

export default SiteHeader;
