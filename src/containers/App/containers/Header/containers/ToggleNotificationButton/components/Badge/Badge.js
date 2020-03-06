import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './badge.styles';

const Badge = ({ className, count }) => {
  const classes = useStyles();

  return (
    <span className={classNames(classes.badge, className)}>
      {count > 9 ? '9 +' : count}
    </span>
  );
};

Badge.defaultProps = {
  className: '',
  count: 0,
};
Badge.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
};

export default memo(Badge);
