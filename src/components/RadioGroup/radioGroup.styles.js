import { createUseStyles } from 'react-jss';
import { hexToRgbA } from '@/utils';

export default createUseStyles((theme) => ({
  container: {
    height: 45,
    marginBottom: 16,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 10,
    margin: 0,
    fontSize: 12,
    color: hexToRgbA(theme.textBlack, 0.7),
    backgroundColor: theme.background,
    padding: [0, 3],
  },
  input: {
    width: '100%',
    height: '100%',
    lineHeight: 1.5,
    color: theme.textBlack,
    padding: 12,
    fontSize: 15,
    boxShadow: 'none',
    border: `1px solid ${theme.borderColor}`,
    backgroundColor: theme.background,
    '&:focus': { outline: 'none', borderColor: hexToRgbA(theme.color, 0.6) },
    '&::placeholder': { color: hexToRgbA(theme.textBlack, 0.7) },
  },
}));
