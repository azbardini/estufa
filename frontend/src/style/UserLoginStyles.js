import {
  makeStyles
} from '@material-ui/core/styles';

import landing from '../img/landing/landing.svg';

const defColor = {
  primary: '#226120',
  secondary: '#2d802a',
  dark: '#1a4d18',
  light: '#7fbf7c',
  superLight: '#c2e0c1'
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: "url(" + landing + ")",
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ?
      theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'center',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  qr: {
    height: '60%',
    padding: theme.spacing(2,0,1,0)
  },
  primaryButton: {
    margin: theme.spacing(3, 0, 2)
  },
  primaryText: {
    textCcolor: defColor.primary,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}));

export default useStyles
