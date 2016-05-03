import React, { PropTypes } from 'react';
import Hero from '../Hero';
import Mailto from '../Mailto';
import Content from '../Content';
import Breadcrumbs from '../Breadcrumbs';
import { ContactForm, ContactStatusMessage } from '../ContactForm/index.js';
import axios from 'axios';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import { showSuccessMessage } from '../../utils/actions';

const mapStateToProps = ({ contact }) => ({
  successful: contact
});

const onSubmit = (form, dispatch) => {
  axios.post('/submit', form)
    .then(() => {
      dispatch(reset('contact'));
      dispatch(showSuccessMessage());
    });
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'This field is required';
  }
  if (!values.surname) {
    errors.surname = 'This field is required';
  }
  if (!values.email) {
    errors.email = 'This field is required';
  }
  if (!values.postcode) {
    errors.postcode = 'This field is required';
  }
  if (values.postcode && !values.postcode.match(/^\d{4}$/)) {
    errors.postcode = 'The postcode is invalid';
  }
  return errors;
};

const Contact = ({ route, successful }) => (
  <section className="contact">
    <Hero/>
    <Breadcrumbs route={route}/>
    <Content>
      <div className="contact-details">
        <h1>Get in touch</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <dl>
          <dt>Phone:</dt>
          <dd>(08) 4321 1234</dd>
          <dt>Email:</dt>
          <dd><Mailto>hello@meerkats.com.au</Mailto></dd>
        </dl>
      </div>
      <ContactForm onSubmit={onSubmit} validate={validate}/>
      <ContactStatusMessage successful={successful}>
        Thanks for contacting us, we will respond to your enquiry soon.
      </ContactStatusMessage>
    </Content>
  </section>
);

Contact.propTypes = {
  route: PropTypes.object.isRequired,
  successful: PropTypes.bool
};

export default connect(
  mapStateToProps
)(Contact);
