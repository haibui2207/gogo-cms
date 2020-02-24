import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { COLORS } from '@/constants';

import Color from '../Color';

import useStyles from './colorPicker.styles';

const ColorPicker = ({ label, colors, activeIndex, onChange }) => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <div className={classes.container}>
      <p className={classes.colorTitle}>{label}</p>
      <div className={classes.colors}>
        {colors.map((color, index) => (
          <Color
            key={`${label}-${color}`}
            color={color}
            active={index === activeIndex}
            onClick={(e) => onChange(color, index, e)}
          />
        ))}
      </div>
    </div>
  );
};

ColorPicker.defaultProps = {
  activeIndex: undefined,
  colors: Object.values(COLORS),
};
ColorPicker.propTypes = {
  label: PropTypes.string.isRequired,
  activeIndex: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

export default memo(ColorPicker);
