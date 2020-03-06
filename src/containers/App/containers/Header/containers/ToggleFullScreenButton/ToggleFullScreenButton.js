import React, { memo, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './toggleFullScreenButton.styles';

const ToggleFullScreenButton = ({ className }) => {
  const [active, setActivity] = useState(false);
  const classes = useStyles();
  const rootElement = useMemo(() => document.documentElement, [document]);

  const openFullscreen = () => {
    if (rootElement.requestFullscreen) {
      rootElement.requestFullscreen();
    } else if (rootElement.mozRequestFullScreen) {
      rootElement.mozRequestFullScreen(); /* Firefox */
    } else if (rootElement.webkitRequestFullscreen) {
      rootElement.webkitRequestFullscreen(); /* Chrome, Safari and Opera */
    } else if (rootElement.msRequestFullscreen) {
      rootElement.msRequestFullscreen(); /* IE/Edge */
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); /* Firefox */
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); /* Chrome, Safari and Opera */
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); /* IE/Edge */
    }
  };
  const toggle = () => {
    if (active) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
    setActivity(!active);
  };

  return (
    <span
      role="presentation"
      onClick={toggle}
      className={classNames(
        classes.toggleApplicationsButton,
        className,
        active && 'active',
      )}
    >
      <i className={!active ? 'icon-fullscreen' : 'icon-exit-fullscreen'} />
    </span>
  );
};

ToggleFullScreenButton.defaultProps = {
  className: '',
};
ToggleFullScreenButton.propTypes = {
  className: PropTypes.string,
};

export default memo(ToggleFullScreenButton);
