/* eslint-disable no-unused-vars */
import React, { memo, useState, useRef, useEffect } from 'react';
import { Switch } from 'react-router';
import generateRoutes from '@/utils/generateRoutes';
import { BREAKPOINTS } from '@/constants';
import { useEventListener, useOnClickOutside } from '@/utils';

import { ROUTES } from './constants';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import useStyles from './app.styles';

const App = () => {
  const [activeSidebar, setActiveSidebar] = useState(true);
  const classes = useStyles();
  const sidebarRef = useRef();

  // const isMobileScreen = () => window
  //   .matchMedia(`(max-width: ${BREAKPOINTS.MAX_MD})`).matches;

  // useEffect(() => {
  //   setActiveSidebar(!isMobileScreen());
  // }, []);

  // useEventListener('resize', () => {
  //   setActiveSidebar(!isMobileScreen());
  // });

  // useOnClickOutside(sidebarRef, () => {
  //   console.log('yea');
  //   setActiveSidebar(false);
  // });

  return (
    <div className={classes.appContainer}>
      <Header toggleSideBar={() => setActiveSidebar(!activeSidebar)} />
      <div className={classes.appBody}>
        <Sidebar active={activeSidebar} />
        <div className={classes.appContent}>
          <div className={classes.content}>
            <Switch>{generateRoutes(ROUTES)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default memo(App);
