import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import logoWhite from '@/assets/images/logo-white.svg';
import logoBlack from '@/assets/images/logo-black.svg';
import { PATHS, MODES } from '@/constants';

import useStyles from './logo.styles';

const Logo = ({ href, className }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <a href={href} className={classNames(classes.container, className)}>
      <img
        alt="Gogo logo"
        className={classes.logo}
        src={theme.mode === MODES.WHITE ? logoBlack : logoWhite}
      />
    </a>
  );
};

Logo.defaultProps = {
  className: '',
  href: PATHS.ROOT,
};
Logo.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Logo);
