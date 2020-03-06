import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
  switchingLanguageButton: {
    width: '100%',
    maxWidth: 60,
    borderRadius: 50,
    backgroundColor: theme.background2,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    color: theme.textGray2,
    padding: [8.5, 8],
    transition: 'color .15s ease-in-out, background-color .15s ease-in-out',
    border: 'none',
    '& [class^=icon-]': { fontSize: 9, marginLeft: 5 },
    '&.active': { backgroundColor: '#dae0e5', color: '#212529' },
    '&:focus': { outline: 'none' },
  },
}));
