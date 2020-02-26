import React, { memo } from 'react';
import { useTheme } from 'react-jss';

import useStyles from './toggleButton.styles';

const ToggleButton = (props) => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <button {...props} className={classes.container}>
      <i className="icon-magic-wand" />
    </button>
  );
};

export default memo(ToggleButton);
