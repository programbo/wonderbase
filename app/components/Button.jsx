import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = ({ children, className, onClick }) => (
  <span className="button-wrapper">
    <button className={classNames('button', className)} onClick={onClick}>
      {children}
    </button>
  </span>
);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
