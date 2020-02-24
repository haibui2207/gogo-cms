import React, { memo } from 'react';
import injectSheet from 'react-jss';
import { Switch } from 'react-router';
import { ROUTES } from '@/constants';
import generateRoutes from '@/utils/generateRoutes';
import ThemePicker from '@/containers/ThemePicker';

import styles from './app.styles';

const App = () => (
  <>
    <Switch>{generateRoutes(ROUTES)}</Switch>
    <ThemePicker />
  </>
);

export default memo(injectSheet(styles)(App));
