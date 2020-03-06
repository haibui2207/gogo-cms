import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  searchBox: {
    width: '100%',
    maxWidth: 230,
    borderRadius: 20,
    background: theme.background2,
    position: 'relative',
    '& [class^=icon-]': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 16,
      cursor: 'pointer',
      color: theme.borderColor,
      fontSize: 17,
      '&:hover': { color: theme.color },
    },
  },
  input: {
    padding: [9.5, 40, 9.5, 16],
    border: 'none',
    background: 'transparent',
    fontSize: 13,
    width: '100%',
    color: theme.textBlack,
    outline: 'none',
    '&::placeholder': { color: theme.placeholder, opacity: 1 /* Firefox */ },
    '&:-ms-input-placeholder': {
      color: theme.placeholder,
    } /* Internet Explorer 10-11 */,
    '&::-ms-input-placeholder': {
      color: theme.placeholder,
    } /* Microsoft Edge */,
  },
}));
