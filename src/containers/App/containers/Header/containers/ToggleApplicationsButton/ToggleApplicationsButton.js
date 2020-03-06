import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './toggleApplicationsButton.styles';

const ToggleApplicationsButton = ({ className }) => {
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
        classes.toggleApplicationsButton,
        className,
        active && 'active',
      )}
    >
      <i className="icon-application" />
    </span>
  );
};

ToggleApplicationsButton.defaultProps = {
  className: '',
};
ToggleApplicationsButton.propTypes = {
  className: PropTypes.string,
};

export default memo(ToggleApplicationsButton);
