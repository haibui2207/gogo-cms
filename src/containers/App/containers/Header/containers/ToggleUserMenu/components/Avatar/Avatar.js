import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './avatar.styles';

const Avatar = ({ className, src }) => {
  const classes = useStyles();

  return (
    <span className={classNames(classes.avatar, className)}>
      {src ? <img alt="Avatar" src={src} /> : <i className="icon-user" />}
    </span>
  );
};

Avatar.defaultProps = {
  className: '',
  src: undefined,
};
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

export default memo(Avatar);
