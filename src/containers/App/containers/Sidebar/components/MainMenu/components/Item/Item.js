import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './item.styles';

const Item = ({ className, label, href, icon, active, onClick }) => {
  const classes = useStyles();

  return (
    <li
      className={classNames(
        classes.itemContainer,
        className,
        active && 'active',
      )}
    >
      <a href={href} className={classes.item} onClick={onClick}>
        <i className={icon} />
        <span className={classes.label}>{label}</span>
      </a>
    </li>
  );
};

Item.defaultProps = {
  className: '',
  active: false,
};
Item.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default memo(Item);
