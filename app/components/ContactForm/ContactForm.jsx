import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { ContactTextField, ContactTextArea, ContactCheckbox } from '../ContactForm';
import Button from '../Button';

const ContactForm = ({ handleSubmit, onSubmit, fields: { firstName, lastName, email, postcode, comment, receiveUpdates } }) => (
  <section className="contact-form-wrapper">
    <form className="contact-form" fields onSubmit={onSubmit}>
      <h1>Online contact form</h1>
      <h4>Fields marked * are required</h4>
      <ContactTextField field={firstName} isRequired name="firstName">First name</ContactTextField>
      <ContactTextField field={lastName} isRequired name="lastName">Last name</ContactTextField>
      <ContactTextField field={email} isRequired name="email" type="email">Email address</ContactTextField>
      <ContactTextField field={postcode} isRequired name="postcode">Postcode</ContactTextField>
      <ContactTextArea field={comment} name="comment">Comment</ContactTextArea>
      <ContactCheckbox field={receiveUpdates} name="receiveUpdates">Yes, I would like to receive email updates</ContactCheckbox>
      <Button className="btn btn-default" onClick={handleSubmit}>Submit</Button>
    </form>
  </section>
);

ContactForm.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
};

export default reduxForm({
  form: 'contact',
  fields: ['firstName', 'lastName', 'email', 'postcode', 'comment', 'receiveUpdates']
})(ContactForm);
