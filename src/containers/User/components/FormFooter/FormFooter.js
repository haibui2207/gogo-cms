import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTheme } from 'react-jss';
import Button from '@/components/Button';

import useStyles from './formFooter.styles';

const FormFooter = ({ className, linkProps, buttonProps }) => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <div className={classNames(classes.container, className)}>
      {linkProps && (
        <a
          {...linkProps}
          className={classNames(classes.link, linkProps.className)}
        >
          {linkProps.label}
        </a>
      )}
      {buttonProps && (
        <Button
          {...buttonProps}
          className={classNames(classes.button, buttonProps.className)}
        >
          {buttonProps.label}
        </Button>
      )}
    </div>
  );
};

FormFooter.defaultProps = {
  className: '',
  linkProps: null,
  buttonProps: null,
};
FormFooter.propTypes = {
  className: PropTypes.string,
  linkProps: PropTypes.shape({
    label: PropTypes.node.isRequired,
    className: PropTypes.string,
  }),
  buttonProps: PropTypes.shape({
    label: PropTypes.node.isRequired,
    className: PropTypes.string,
  }),
};

export default memo(FormFooter);
