import React, { memo } from 'react';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Footer from './containers/Footer';
import useStyles from './app.styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <Header />
      <div className={classes.appBody}>
        <Sidebar />
        <div className={classes.appContent}>
          <div className={classes.content}>{/* routes */}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default memo(App);
