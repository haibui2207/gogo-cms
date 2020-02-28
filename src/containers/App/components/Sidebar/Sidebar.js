/* eslint-disable no-unused-vars */
import React, { memo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useOnClickOutside, useEventListener } from '@/utils';
import { BREAKPOINTS } from '@/constants';

import MainMenu from './containers/MainMenu';
import SubMenu from './containers/SubMenu';
import useStyles from './sidebar.styles';

const Sidebar = ({ active }) => {
  const [mainMenuState, setMainMenuState] = useState({ active });
  const [subMenuState, setSubMenuState] = useState({
    active: false, activatedIndex: -1,
  });
  const sidebarRef = useRef();
  const classes = useStyles();

  const isMobileScreen = () => window
    .matchMedia(`(max-width: ${BREAKPOINTS.MAX_MD})`).matches;

  useEffect(() => {
    setMainMenuState({ active });
  }, [active]);

  useEffect(() => {
    setMainMenuState({ active: !isMobileScreen() });
  }, []);

  useEventListener('resize', () => {
    setMainMenuState({ active: !isMobileScreen() });
  });

  useOnClickOutside(sidebarRef, () => {
    setSubMenuState({ ...subMenuState, active: false });
    setMainMenuState({ active: !isMobileScreen() });
  });

  const handleMainMenuChange = (_, index) => {
    setSubMenuState({ active: true, activatedIndex: index });
  };

  return (
    <div ref={sidebarRef} className={classes.container}>
      <MainMenu {...mainMenuState} onChange={handleMainMenuChange} />
      <SubMenu {...subMenuState} />
    </div>
  );
};

Sidebar.defaultProps = {
  active: true,
  onChange: () => {},
};
Sidebar.propTypes = {
  active: PropTypes.bool,
  onChange: PropTypes.func,
};

export default memo(Sidebar);
