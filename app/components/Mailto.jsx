import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { reverseString as reverse } from '../utils/helpers';

function handleHref(e) {
  e.preventDefault();
  window.location = `mailto:${reverse(this.children)}`;
}

const reversedStyle = {
  unicodeBidi: 'bidi-override',
  direction: 'rtl'
};

const Mailto = ({ children, className }) => (
  <Link
    className={className}
    onClick={handleHref}
    style={reversedStyle}
    to="mailto:"
  >
      {reverse(children)}
  </Link>
);

Mailto.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Mailto;
