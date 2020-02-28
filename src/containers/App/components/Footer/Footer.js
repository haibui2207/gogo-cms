import React, { memo } from 'react';

import useStyles from './footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <span className={classes.copyRight}>ColoredStrategies 2019</span>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <a href="/" className={classes.item}>
            Review
          </a>
        </li>
        <li className={classes.listItem}>
          <a href="/" className={classes.item}>
            Purchase
          </a>
        </li>
        <li className={classes.listItem}>
          <a href="/" className={classes.item}>
            Docs
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default memo(Footer);
