import { createUseStyles } from 'react-jss';


export default createUseStyles({
  container: {
    height: '100%',
    zIndex: 1020,
    flex: 'none',
    display: 'inline-block',
    marginLeft: 0,
    position: 'relative',
    // transition: 'margin-left .3s',
    // '-ms-overflow-style': 'none', // hide scroll bar
    // '&::-webkit-scrollbar': { display: 'none' }, // hide scroll bar
    // '&.hideMainSidebar': {
    //   marginLeft: -90,
    //   boxShadow: 'none',
    //   overflow: 'hidden',
    // },
  },
});
