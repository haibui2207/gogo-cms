import { createUseStyles } from 'react-jss';
import BREAKPOINTS from '@/constants/breakpoints';

import { HEIGHT as HEADER_HEIGHT } from './components/Header/header.styles';
import { HEIGHT as FOOTER_HEIGHT } from './components/Footer/footer.styles';

const getAppBodyHeight = point => `
  calc(100vh - ${HEADER_HEIGHT[point]}px)`;
const getContentHeight = point => `
  calc(100vh - ${HEADER_HEIGHT[point]}px - ${FOOTER_HEIGHT[point]}px)`;

export default createUseStyles(theme => ({
  '@global': { body: { overflow: 'hidden' } },
  appContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  appBody: {
    display: 'flex',
    overflow: 'hidden',
    height: getAppBodyHeight('XXXL'),
  },
  appContent: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: theme.background2,
  },
  content: {
    padding: [30, 50, 0],
    transition: 'padding .3s',
    minHeight: getContentHeight('XXXL'),
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_XXL})`]: {
    appBody: { height: getAppBodyHeight('XXL') },
    content: { minHeight: getContentHeight('XXL') },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_XL})`]: {
    appBody: { height: getAppBodyHeight('XL') },
    content: { padding: [30, 40, 0], minHeight: getContentHeight('XL') },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    appBody: { height: getAppBodyHeight('MD') },
    content: { padding: [30, 15, 0], minHeight: getContentHeight('MD') },
  },
  [`@media (max-width: ${BREAKPOINTS.MAX_SM})`]: {
    appBody: { height: getAppBodyHeight('SM') },
    content: { minHeight: getContentHeight('SM') },
  },
}));
