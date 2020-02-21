import React, { memo } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './imageSide.styles';

const ImageSide = ({ classes }) => (
  <div className={classes.container}>
    <h1 className={classes.title}>MAGIC IS IN THE DETAILS</h1>
    <p className={classes.description}>
      Please use your credentials to login.
      <br />
      If you are not a member, please&nbsp;
      <a className={classes.link} href="/register">
        register
      </a>
      .
    </p>
  </div>
);

ImageSide.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default memo(injectSheet(styles)(ImageSide));
