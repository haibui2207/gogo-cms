import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTheme } from 'react-jss';
import Logo from '@/components/Logo';

import useStyles from './formLayout.styles';

const FormLayout = ({ className, title, children }) => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <div className={classNames(classes.container, className)}>
      <Logo className={classes.logo} />
      <p className={classes.title}>{title}</p>
      {children}
    </div>
  );
};

FormLayout.defaultProps = {
  className: '',
};
FormLayout.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(FormLayout);
