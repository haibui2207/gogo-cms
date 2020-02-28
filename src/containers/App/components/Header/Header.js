import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Logo from '@/components/Logo';

import useStyles from './header.styles';

const Header = ({ toggleSideBar }) => {
  const classes = useStyles();

  return (
    <nav className={classes.container}>
      <div className={classes.leftHeader}>
        <i role="presentation" className="icon-menu" onClick={toggleSideBar} />
      </div>
      <Logo className={classes.logo} />
      <div className={classes.rightHeader}>xyz</div>
    </nav>
  );
};

Header.defaultProps = {
  toggleSideBar: () => {},
};
Header.propTypes = {
  toggleSideBar: PropTypes.func,
};

export default memo(Header);
