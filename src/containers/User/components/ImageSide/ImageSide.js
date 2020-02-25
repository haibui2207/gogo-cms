import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

import useStyles from './imageSide.styles';

const ImageSide = ({ className, title, description }) => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <div className={classNames(classes.container, className)}>
      {title && <h1 className={classes.title}>{title}</h1>}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  );
};

ImageSide.defaultProps = {
  className: '',
  title: null,
  description: null,
};
ImageSide.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default memo(ImageSide);
