import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { ErrorIcon } from '.';

const ContactCheckbox = ({ children, isRequired, name, field }) => {
  const classes = classNames(
    'contact-checkbox-wrapper',
    'contact-input-group',
    { required: isRequired }
  );

  return (
    <section className={classes}>
      <label htmlFor={name}>
        <input id={name} type="checkbox" {...field}/>
        <span className="label-text">{children}</span>
      </label>
      {field.touched && field.error && <span className="error-message"><ErrorIcon/>{field.error}</span>}
    </section>
  );
};

ContactCheckbox.propTypes = {
  children: PropTypes.any,
  isRequired: PropTypes.bool,
  field: PropTypes.object,
  name: PropTypes.string
};

export default ContactCheckbox;
