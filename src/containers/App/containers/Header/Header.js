import React, { memo } from 'react';
import Logo from '@/components/Logo';

import SearchBox from './containers/SearchBox';
import ToggleSidebarButton from './containers/ToggleSidebarButton';
import SwitchingLanguageButton from './containers/SwitchingLanguageButton';
import ToggleApplicationsButton from './containers/ToggleApplicationsButton';
import ToggleNotificationButton from './containers/ToggleNotificationButton';
import ToggleFullScreenButton from './containers/ToggleFullScreenButton';
import ToggleUserMenu from './containers/ToggleUserMenu';
import useStyles from './header.styles';

const Header = () => {
  const classes = useStyles();

  return (
    <nav className={classes.container}>
      <div className={classes.leftHeader}>
        <ToggleSidebarButton className={classes.sidebarButton} />
        <SearchBox onSearch={() => {}} className={classes.searchBox} />
        <SwitchingLanguageButton className={classes.switchLanguageButton} />
      </div>
      <Logo className={classes.logo} />
      <div className={classes.rightHeader}>
        <ToggleApplicationsButton className={classes.applicationButton} />
        <ToggleNotificationButton className={classes.notificationButton} />
        <ToggleFullScreenButton className={classes.toggleScreenButton} />
        <ToggleUserMenu className={classes.userMenu} />
      </div>
    </nav>
  );
};

export default memo(Header);
