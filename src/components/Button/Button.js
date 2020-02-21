import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import styles from './button.styles';

const Button = ({ classes, className, children, ...rest }) => (
  <button {...rest} className={classNames(classes.container, className)}>
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
};
Button.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default injectSheet(styles)(Button);
