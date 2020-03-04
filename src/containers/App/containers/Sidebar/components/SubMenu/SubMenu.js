import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './subMenu.styles';

const SubMenu = ({ className, children, active }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.subMenu, className, active && 'active')}>
      {children}
    </div>
  );
};

SubMenu.defaultProps = { className: '' };
SubMenu.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(SubMenu);
