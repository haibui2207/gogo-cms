import React, { useMemo, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { ThemeProvider as ThemeProviderJSS } from 'react-jss';
import { getTheme, setTheme } from '@/redux/ducks/theme.ducks';
import { MODES, WHITE_MODE, DARK_MODE } from '@/constants';
import { useEventListener } from '@/utils';
import { localStorage } from '@/services';

const KEY = 'theme';

const ThemeProvider = ({ children }) => {
  const selector = useSelector(getTheme, shallowEqual);
  const dispatch = useDispatch();
  const theme = useMemo(() => {
    if (selector && selector.mode === MODES.WHITE) {
      return { ...WHITE_MODE, ...selector, mode: MODES.WHITE };
    }

    return { ...DARK_MODE, ...selector, mode: MODES.DARK };
  }, [selector]);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem(KEY));
    if (!savedTheme) return;

    const { mode, color, colorHover } = savedTheme;
    localStorage.removeItem(KEY);
    dispatch(setTheme({ mode, color, colorHover }));
  }, []);

  useEventListener('unload', () => {
    localStorage.setItem(KEY, JSON.stringify(theme));
  });

  return <ThemeProviderJSS theme={theme}>{children}</ThemeProviderJSS>;
};

ThemeProvider.propTypes = { children: PropTypes.node.isRequired };

export default memo(ThemeProvider);
