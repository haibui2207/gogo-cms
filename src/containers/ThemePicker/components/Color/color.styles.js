import { createUseStyles } from 'react-jss';

export default createUseStyles({
  container: (props) => ({
    width: 24,
    height: 24,
    border: `3px solid ${props.color}`,
    display: 'inline-block',
    borderRadius: '50%',
    backgroundColor: props.color,
    cursor: 'pointer',
    transition: 'background-color .25s',
    '&.active, &:hover': { backgroundColor: 'transparent' },
  }),
});
