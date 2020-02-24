import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import classNames from 'classnames';

import useStyles from './button.styles';

const Button = ({ className, children, ...rest }) => {
  const classes = useStyles({ them: useTheme() });

  return (
    <button {...rest} className={classNames(classes.container, className)}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default memo(Button);
