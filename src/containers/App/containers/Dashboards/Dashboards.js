import React, { memo } from 'react';
import { useIntl } from 'react-intl';

import useStyles from './dashboards.styles';

const Dashboards = () => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <div className={classes.container}>
      {intl.formatMessage({ id: 'HOME.TEASER.DASHBOARD.TITLE' })}
    </div>
  );
};

export default memo(Dashboards);
