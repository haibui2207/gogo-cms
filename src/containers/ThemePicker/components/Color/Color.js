import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './color.styles';

const Color = ({ active, color, ...rest }) => {
  const classes = useStyles({ color });

  return (
    <span
      {...rest}
      className={classNames(classes.container, active && 'active')}
    />
  );
};

Color.defaultProps = {
  active: false,
};
Color.propTypes = {
  color: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default memo(Color);
