import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Item from './components/Item';
import useStyles from './mainMenu.styles';

const MainMenu = ({ className, data, onChange, active, activatedIndex }) => {
  const classes = useStyles();

  return (
    <ul className={classNames(classes.mainMenu, className, active && 'active')}>
      {data.map((item, index) => (
        <Item
          {...item}
          key={`${item.label}-${item.icon}`}
          onClick={e => onChange(e, item, index)}
          active={activatedIndex === index}
        />
      ))}
    </ul>
  );
};

MainMenu.defaultProps = { className: '' };
MainMenu.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      redirect: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  activatedIndex: PropTypes.number.isRequired,
};

export default memo(MainMenu);
