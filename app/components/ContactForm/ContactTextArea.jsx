import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { ErrorIcon } from '.';

const ContactTextArea = ({ children, isRequired, name, field }) => {
  const classes = classNames(
    'contact-textarea-wrapper',
    'contact-input-group',
    'form-group',
    { required: isRequired }
  );
  return (
    <section className={classes}>
      <label htmlFor={name}>
        <span className="label-text">{children}</span>
      </label>
      <textarea className="form-control" id={name} {...field}/>
      {field.touched && field.error && <span className="error-message"><ErrorIcon/>{field.error}</span>}
    </section>
  );
};

ContactTextArea.propTypes = {
  children: PropTypes.any,
  isRequired: PropTypes.bool,
  field: PropTypes.object,
  name: PropTypes.string
};

export default ContactTextArea;
