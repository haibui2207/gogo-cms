import { createUseStyles } from 'react-jss';
import { hexToRgbA } from '@/utils';

export default createUseStyles((theme) => ({
  '@keyframes beforeEffect': {
    from: { transform: 'scale(1)', opacity: 0.7 },
    to: { transform: 'scale(0)', opacity: 0 },
  },
  '@keyframes afterEffect': {
    from: { transform: 'scale(0)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 0.7 },
  },
  container: {
    top: 0,
    left: 0,
    zIndex: 99999,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    pointerEvents: 'none',
    boxShadow: `inset 0px 0px 0px 2000px ${hexToRgbA('#303030', 0.4)}`,
    '& ~ *': { pointerEvents: 'none', userSelect: 'none' },
  },
  effect: {
    width: 60,
    height: 60,
    margin: 'auto',
    position: 'relative',
    '&:before, &:after': {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      borderRadius: '50%',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    },
    '&:before': {
      backgroundColor: '#fff',
      animation: '$beforeEffect .8s ease-in-out infinite alternate',
    },
    '&:after': {
      backgroundColor: theme.color,
      animation: '$afterEffect .8s ease-in-out infinite alternate',
    },
  },
}));
