import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSidebar } from '@/containers/App/containers/Sidebar';

import useStyles from './toggleSidebarButton.styles';

const ToggleSidebarButton = ({ className }) => {
  const classes = useStyles();
  const { active: activatedSidebar, toggle: toggleSidebar } = useSidebar();

  return (
    <span
      role="presentation"
      onClick={toggleSidebar}
      className={classNames(
        classes.toggleSidebarButton,
        className,
        activatedSidebar && 'active',
      )}
    >
      <i className="icon-menu" />
    </span>
  );
};

ToggleSidebarButton.defaultProps = {
  className: '',
};
ToggleSidebarButton.propTypes = {
  className: PropTypes.string,
};

export default memo(ToggleSidebarButton);
