import React, { memo, useState } from 'react';
import classNames from 'classnames';

import useStyles from './sidebar.styles';

const list = [
  { label: 'Dashboards', icon: 'icon-shop-house', href: '/' },
  { label: 'Pages', icon: 'icon-computer', href: '/' },
  { label: 'Applications', icon: 'icon-application', href: '/' },
  { label: 'UI', icon: 'icon-pantone', href: '/' },
  { label: 'Menu', icon: 'icon-tree-menu', href: '/' },
];

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [activatedIndex, setActiveIndex] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {list.map((item, index) => (
          <li
            key={`${item.label}-${item.icon}`}
            className={classNames(
              classes.listItem,
              activatedIndex === index && 'active',
            )}
          >
            <a href="/" className={classes.itemWrapper}>
              <i className={item.icon} />
              <span className={classes.itemLabel}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Sidebar);
