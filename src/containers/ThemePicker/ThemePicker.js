import React, {
  useState,
  memo,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import classNames from 'classnames';
import { useTheme } from 'react-jss';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { setTheme, getTheme } from '@/redux/ducks/theme.ducks';
import { MODES, HOVER_COLORS, COLORS } from '@/constants';
import { useOnClickOutside } from '@/hooks';

import ToggleButton from './components/ToggleButton';
import ColorPicker from './components/ColorPicker';
import useStyles from './themePicker.styles';

const ThemePicker = () => {
  const [isShownBoxPicker, showBoxPicker] = useState(false);
  const [activatedColor, setActiveColor] = useState({
    mode: MODES.WHITE, index: 0,
  });
  const selector = useSelector(getTheme, shallowEqual);
  const classes = useStyles({ theme: useTheme() });
  const colors = useMemo(() => Object.values(COLORS), []);
  const hoverColors = useMemo(() => Object.values(HOVER_COLORS), []);
  const dispatch = useDispatch();
  const boxPickerRef = useRef();

  useEffect(() => {
    const { mode, color } = selector;
    setActiveColor({ mode, index: colors.findIndex(c => c === color) });
  }, [selector]);

  useOnClickOutside(boxPickerRef, () => { showBoxPicker(false); });

  const handleColorChange = useCallback((mode, color, index) => {
    setActiveColor({ mode, index });
    dispatch(
      setTheme({
        mode,
        color,
        colorHover: hoverColors[index],
      }),
    );
  }, [dispatch]);

  const getActiveIndex = (mode) => (
    activatedColor.mode === mode ? activatedColor.index : -1);

  return (
    <div className={classes.container}>
      <ToggleButton onClick={() => showBoxPicker(!isShownBoxPicker)} />
      <div
        ref={boxPickerRef}
        className={classNames(classes.boxPicker, isShownBoxPicker && 'shown')}
      >
        <ColorPicker
          label="Light Theme"
          activeIndex={getActiveIndex(MODES.WHITE)}
          onChange={(...args) => handleColorChange(MODES.WHITE, ...args)}
        />
        <ColorPicker
          label="Dark Theme"
          activeIndex={getActiveIndex(MODES.DARK)}
          onChange={(...args) => handleColorChange(MODES.DARK, ...args)}
        />
      </div>
    </div>
  );
};

export default memo(ThemePicker);
