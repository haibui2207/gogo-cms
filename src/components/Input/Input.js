import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { generateId } from '@/utils';

import styles from './input.styles';

const Input = ({ classes, className, label, name, ...rest }) => {
  const id = generateId();

  return (
    <div className={classNames(classes.container, className)}>
      <label className={classes.label} htmlFor={id}>{label}</label>
      <input {...rest} id={id} name={name} className={classes.input} />
    </div>
  );
};

Input.defaultProps = {
  className: '',
};
Input.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default injectSheet(styles)(Input);
