import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    position: 'fixed',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
  },
  boxPicker: {
    width: 280,
    height: 200,
    marginRight: -280,
    padding: [34, 24],
    backgroundColor: theme.background,
    transition: 'margin-right .4s ease-out',
    boxShadow: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
    '&.shown': { marginRight: 0 },
  },
}));
