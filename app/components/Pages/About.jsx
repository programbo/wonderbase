import React, { PropTypes } from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Breadcrumbs from '../Breadcrumbs';

const About = ({ route }) => (
  <section className="about">
    <Hero/>
    <Breadcrumbs route={route}/>
    <Content>
      <h1>About</h1>
      <h2>Donec ullamcorper nulla non metus auctor fringilla.</h2>
      <p>Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.</p>
    </Content>
  </section>
);

About.propTypes = {
  route: PropTypes.object.isRequired
};

export default About;
