import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import { ThemeProvider as ThemeProviderJSS } from 'react-jss';
import { getTheme } from '@/redux/ducks/theme.ducks';
import { MODES, WHITE_MODE, DARK_MODE } from '@/constants';

const ThemeProvider = ({ children }) => {
  const selector = useSelector(getTheme, shallowEqual);
  const theme = useMemo(() => {
    if (selector && selector.mode === MODES.WHITE) {
      return { ...WHITE_MODE, ...selector, mode: MODES.WHITE };
    }

    return { ...DARK_MODE, ...selector, mode: MODES.DARK };
  }, [selector]);

  return <ThemeProviderJSS theme={theme}>{children}</ThemeProviderJSS>;
};

ThemeProvider.propTypes = { children: PropTypes.node.isRequired };

export default memo(ThemeProvider);
