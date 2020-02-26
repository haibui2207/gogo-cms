import React, { memo } from 'react';
import Logo from '@/components/Logo';

import useStyles from './header.styles';

const Header = () => {
  const classes = useStyles();

  return (
    <nav className={classes.container}>
      <div className={classes.leftHeader}>
        <i className="icon-menu" />
      </div>
      <Logo />
      <div className={classes.rightHeader}>xyz</div>
    </nav>
  );
};

export default memo(Header);
