import React from 'react';
import Copyright from '../Copyright';
import FooterMenu from '../FooterMenu';

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer-content container">
      <Copyright>&copy; XXX. All rights reserved.</Copyright>
      <FooterMenu/>
    </div>
  </footer>
);

export default SiteFooter;
