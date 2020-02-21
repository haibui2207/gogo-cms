import React, { memo } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './title.styles';

const Title = ({ classes }) => <p className={classes.container}>Login</p>;

Title.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default memo(injectSheet(styles)(Title));
