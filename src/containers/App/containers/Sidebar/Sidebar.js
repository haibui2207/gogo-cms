import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import { useOnClickOutside, useEventListener } from '@/utils';
import { BREAKPOINTS } from '@/constants';

import MainMenu from './components/MainMenu';
import SubMenu from './components/SubMenu';
import useStyles from './sidebar.styles';
import { useSidebar } from './sidebar.context';
import { mainMenuData } from './config';

const Sidebar = () => {
  const [activatedSubMenu, setSubMenuActivity] = useState(false);
  const sidebarRef = useRef();
  const classes = useStyles();
  const isMediumScreen = useCallback(
    () => window.matchMedia(`(max-width: ${BREAKPOINTS.MAX_MD})`).matches,
    [],
  );
  const {
    active: activatedSidebar,
    activatedIndex: activatedSidebarIndex,
    setActivity: setSidebarActivity,
    setState: setSidebarState,
  } = useSidebar();
  const previousState = useRef({
    width: window.innerWidth,
    activatedSidebarIndex,
  });

  useEffect(() => {
    setSidebarActivity(!isMediumScreen());
  }, []);

  useEventListener('resize', () => {
    const isResizingLarger =
      window.innerWidth - previousState.current.width > 0;
    if (isResizingLarger && !isMediumScreen() && !activatedSidebar) {
      setSidebarActivity(true);
    } else if (isMediumScreen() && activatedSidebar) {
      setSidebarActivity(false);
      setSubMenuActivity(false);
    }

    previousState.current.width = window.innerWidth;
  });

  useOnClickOutside(sidebarRef, () => {
    setSidebarState({
      active: isMediumScreen() ? false : activatedSidebar,
      activatedIndex: previousState.current.activatedSidebarIndex,
    });
    setSubMenuActivity(false);
  });

  const handleMainMenuChange = (e, itemData, itemIndex) => {
    e.preventDefault();
    setSidebarState({ active: true, activatedIndex: itemIndex });
    setSubMenuActivity(true);
  };

  const renderSubMenuContent = () => {
    switch (activatedSidebarIndex) {
      case 1:
        return <span>Index 1</span>;
      case 2:
        return <span>Index 2</span>;
      case 3:
        return <span>Index 3</span>;
      case 4:
        return <span>Index 4</span>;
      default:
        return <span>Index 0</span>;
    }
  };

  return (
    <div ref={sidebarRef} className={classes.container}>
      <MainMenu
        data={mainMenuData}
        active={activatedSidebar}
        activatedIndex={activatedSidebarIndex}
        onChange={handleMainMenuChange}
      />
      <SubMenu active={activatedSubMenu}>{renderSubMenuContent()}</SubMenu>
    </div>
  );
};

export default memo(Sidebar);
