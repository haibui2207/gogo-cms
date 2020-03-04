import React, { memo } from 'react';
import classNames from 'classnames';
import Logo from '@/components/Logo';

import useStyles from './header.styles';
import { useSidebar } from '../Sidebar';

const Header = () => {
  const classes = useStyles();
  const { active: activatedSidebar, toggle: toggleSidebar } = useSidebar();

  return (
    <nav className={classes.container}>
      <div className={classes.leftHeader}>
        <span
          role="presentation"
          onClick={toggleSidebar}
          className={classNames(
            classes.toggleSidebarButton,
            activatedSidebar && 'active',
          )}
        >
          <i className="icon-menu" />
        </span>
      </div>
      <Logo className={classes.logo} />
      <div className={classes.rightHeader}>xyz</div>
    </nav>
  );
};

export default memo(Header);
