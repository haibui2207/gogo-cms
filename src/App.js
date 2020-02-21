import React, { memo } from 'react';
import { Switch } from 'react-router';
import injectSheet from 'react-jss';
import { ROUTES } from '@/constants';
import generateRoutes from '@/utils/generateRoutes';

import styles from './app.styles';

const App = () => <Switch>{generateRoutes(ROUTES)}</Switch>;

export default memo(injectSheet(styles)(App));
