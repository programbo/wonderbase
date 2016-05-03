import React from 'react';
import Content from '../Content';
import Breadcrumbs from '../Breadcrumbs';

const NotFound = () => (
  <section className="disclaimer">
    <Content>
      <Breadcrumbs route={{ name: 'Page not found' }}/>
      <h1>404 Page Not Found</h1>
      <h2>We apologise for any inconvenience</h2>
      <p>
        Please check the URL for any typing errors.
        <br/>
        Check that you have the necessary permissions to access the desired content.
        <br/>
        Alternatively, you can go back to our home page to find what you’re looking for.
      </p>
    </Content>
  </section>
);

export default NotFound;
