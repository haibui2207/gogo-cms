import React, { memo } from 'react';
import { Switch } from 'react-router';
import { ROUTES } from '@/constants';
import generateRoutes from '@/utils/generateRoutes';
import ThemePicker from '@/containers/ThemePicker';

const App = () => {
  console.log(generateRoutes(ROUTES));
  return (
    <>
      <Switch>{generateRoutes(ROUTES)}</Switch>
      <ThemePicker />
    </>
  );
};

export default memo(App);
