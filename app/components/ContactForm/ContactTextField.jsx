import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { ErrorIcon } from '.';

const ContactTextField = ({ name, children, isRequired, type, field }) => {
  const classes = classNames(
    'contact-textfield-wrapper',
    'contact-input-group',
    'form-group',
    { required: isRequired }
  );

  return (
    <section className={classes}>
      <label htmlFor={name}>
        <span className="label-text">{children}</span>
      </label>
      <input className="form-control" id={name} type={type || 'text'} {...field}/>
      {field.touched && field.error && <span className="error-message"><ErrorIcon/>{field.error}</span>}
    </section>
  );
};

ContactTextField.propTypes = {
  children: PropTypes.any,
  isRequired: PropTypes.bool,
  field: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string
};

export default ContactTextField;
