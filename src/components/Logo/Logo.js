import React, { memo } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import logo from '@/assets/images/logo-black.svg';
import { PATHS } from '@/constants';

import styles from './logo.styles';

const Logo = ({ classes, href, className }) => (
  <a href={href} className={classNames(classes.container, className)}>
    <img className={classes.logo} src={logo} alt="Gogo logo" />
  </a>
);

Logo.defaultProps = {
  href: PATHS.ROOT,
  className: '',
};
Logo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default memo(injectSheet(styles)(Logo));
