import React, { memo } from 'react';
import { Switch } from 'react-router';
import generateRoutes from '@/utils/generateRoutes';

import Header from './containers/Header';
import Sidebar, { SidebarProvider } from './containers/Sidebar';
import Footer from './components/Footer';
import { ROUTES } from './constants';
import useStyles from './app.styles';

const App = () => {
  const classes = useStyles();

  return (
    <SidebarProvider>
      <div className={classes.appContainer}>
        <Header />
        <div className={classes.appBody}>
          <Sidebar />
          <div className={classes.appContent}>
            <div className={classes.content}>
              <Switch>{generateRoutes(ROUTES)}</Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default memo(App);
