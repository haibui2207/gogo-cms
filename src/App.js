import React, { memo } from 'react';
import { Switch } from 'react-router';
import { ROUTES } from '@/constants';
import generateRoutes from '@/utils/generateRoutes';
import ThemePicker from '@/containers/ThemePicker';
// import Loading from '@/components/Loading';

const App = () => (
  <>
    {/* <Loading /> */}
    <Switch>{generateRoutes(ROUTES)}</Switch>
    <ThemePicker />
  </>
);

export default memo(App);
