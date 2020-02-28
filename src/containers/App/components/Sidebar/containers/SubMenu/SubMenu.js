import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './subMenu.styles';

const SubMenu = ({ className, active, activatedIndex }) => {
  const classes = useStyles();

  const renderSubMenuContent = () => {
    switch (activatedIndex) {
    case 1:
      return <span>Index 1</span>;
    case 2:
      return <span>Index 2</span>;
    case 3:
      return <span>Index 3</span>;
    case 4:
      return <span>Index 4</span>;
    default:
      return <span>Index 0</span>;
    }
  };

  return (
    <div className={classNames(classes.subMenu, className, active && 'active')}>
      {renderSubMenuContent()}
    </div>
  );
};

SubMenu.defaultProps = {
  className: '',
  active: false,
  activatedIndex: 0,
};
SubMenu.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  activatedIndex: PropTypes.number,
};

export default memo(SubMenu);
