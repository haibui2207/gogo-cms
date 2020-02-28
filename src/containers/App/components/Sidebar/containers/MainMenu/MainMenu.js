import React, { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useOnClickOutside } from '@/utils';

import { mainMenuData } from '../../config';

import Item from './components/Item';
import useStyles from './mainMenu.styles';

const MainMenu = ({ className, onChange, active }) => {
  const [activatedRoute, setActiveRoute] = useState('');
  const classes = useStyles();
  const mainSideBar = useRef();

  const setRoute = () => {
    // eslint-disable-next-line no-useless-escape
    setActiveRoute(window.location.pathname.replace(/[\/]+$/, ''));
  };

  useEffect(() => {
    setRoute();
  }, []);

  useOnClickOutside(mainSideBar, () => {
    setRoute();
  });

  const handleItemClick = (e, route, index) => {
    e.preventDefault();
    setActiveRoute(route);
    onChange(route, index);
  };

  return (
    <ul
      ref={mainSideBar}
      className={classNames(classes.mainMenu, className, active && 'active')}
    >
      {mainMenuData.map((item, index) => (
        <Item
          {...item}
          key={`${item.label}-${item.icon}`}
          onClick={e => handleItemClick(e, item.href, index)}
          active={activatedRoute.includes(item.href)}
        />
      ))}
    </ul>
  );
};

MainMenu.defaultProps = {
  className: '',
  onChange: () => {},
  active: true,
};
MainMenu.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  active: PropTypes.bool,
};

export default memo(MainMenu);
