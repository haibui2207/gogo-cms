import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import { generateId } from '@/utils';

import useStyles from './radioGroup.styles';

const RadioGroup = ({ className, label, name, ...rest }) => {
  const id = generateId();
  const classes = useStyles({ theme: useTheme() });

  return (
    <div className={classNames(classes.container, className)}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input {...rest} id={id} name={name} className={classes.input} />
    </div>
  );
};

RadioGroup.defaultProps = {
  className: '',
};
RadioGroup.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default memo(RadioGroup);
