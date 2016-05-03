import React, { PropTypes } from 'react';
import Shade from '../Lightbox/Shade';
import { SiteHeader, SiteContent, SiteFooter } from '.';
import getPageData, { defaultPageData } from '../../data/data';
import { updateMetadata } from '../../utils/helpers';

const Main = ({ children, location: { pathname } }) => {
  const pageData = getPageData(pathname) || defaultPageData;
  updateMetadata(pageData);

  return (
    <div className="main">
      <Shade/>
      <SiteHeader/>
      <SiteContent pageData={pageData}>{children}</SiteContent>
      <SiteFooter/>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
};

export default Main;
