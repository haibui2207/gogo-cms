import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from './components/Avatar';
import useStyles from './toggleUserMenu.styles';

const ToggleUserMenu = ({ className }) => {
  const [active, setActivity] = useState(false);
  const classes = useStyles();
  const toggle = () => {
    setActivity(!active);
  };

  return (
    <span
      role="presentation"
      onClick={toggle}
      className={classNames(
        classes.toggleUserMenu,
        className,
        active && 'active',
      )}
    >
      <Avatar
        src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" // eslint-disable-line
      />
    </span>
  );
};

ToggleUserMenu.defaultProps = {
  className: '',
};
ToggleUserMenu.propTypes = {
  className: PropTypes.string,
};

export default memo(ToggleUserMenu);
