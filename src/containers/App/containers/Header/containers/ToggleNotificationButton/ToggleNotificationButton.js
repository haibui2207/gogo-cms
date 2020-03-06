import React, { memo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useOnClickOutside } from '@/utils';

import useStyles from './toggleNotificationButton.styles';
import Badge from './components/Badge';

const Notification = ({ className }) => {
  const [active, setActivity] = useState(false);
  const classes = useStyles();
  const ref = useRef();
  const toggle = () => {
    setActivity(!active);
  };

  useOnClickOutside(ref, () => { setActivity(false); });

  return (
    <span
      ref={ref}
      role="presentation"
      onClick={toggle}
      className={classNames(
        classes.toggleNotificationButton,
        className,
        active && 'active',
      )}
    >
      <i className="icon-bell" />
      <Badge count={5} className={classes.badge} />
    </span>
  );
};

Notification.defaultProps = {
  className: '',
};
Notification.propTypes = {
  className: PropTypes.string,
};

export default memo(Notification);
