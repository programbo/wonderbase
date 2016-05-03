import React from 'react';
import Main from '../components/Layout/Main';
import { Home, About, Contact, NotFound } from '../components/Pages';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route component={Main} path="/">
    <IndexRoute component={Home} name="Home"/>
    <Route component={About} name="About" path="/about"/>
    <Route component={Contact} name="Contact" path="/contact"/>
    <Route component={NotFound} name="NotFound" path="*"/>
  </Route>
);
