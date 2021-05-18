import {
  makeStyles
} from '@material-ui/core/styles';

const defColor = {
  primary: '#226120',
  secondary: '#2d802a',
  dark: '#1a4d18',
  darkRed: '#550d18',
  light: '#7fbf7c',
  superLight: '#c2e0c1'
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    width: '60%',
    minWidth: '60%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5),
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: defColor.superLight
  },
  header: {
    backgroundColor: defColor.primary,
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    width: '180px',
    paddingBottom: theme.spacing(1)
  },
  newCaseImage: {
    width: '80%',
    padding: theme.spacing(3)
  },
  title: {
    backgroundColor: defColor.superLight,
    padding: theme.spacing(4, 0, 4, 0)
  },
  primaryButton: {
    backgroundColor: defColor.superLight,
    margin: theme.spacing(1)
  },
  submitButton: {
    backgroundColor: defColor.primary,
    color: defColor.superLight,
    margin: theme.spacing(3, 0, 2)
  },
  cardGrid: {
    padding: theme.spacing(4, 4, 4, 4)
  },
  spaceLeft: {
    marginLeft: theme.spacing(2)
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2, 2, 0, 2)
  },
  cardContent: {
    flexGrow: 1,
    minHeight: '300px'
  },
  footer: {
    backgroundColor: defColor.primary,
    color: 'white',
    padding: theme.spacing(2),
    marginTop: 'auto'
  },
  whiteLink: {
    color: 'white'
  },
  loading: {
    height: '60%',
    padding: theme.spacing(2, 0, 1, 0)
  },
  flexCalendar: {
    display: 'flex',
  },
  calendarColumn: {
    flex: 1,
    marginTop: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  greenCalendarRow: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: '40px',
    margin: '12px',
    backgroundColor: defColor.primary,
    color: 'white',
    borderRadius: '6px'
    // display: 'flex',
  },
  redCalendarRow: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: '40px',
    margin: '12px',
    backgroundColor: defColor.darkRed,
    color: 'white',
    borderRadius: '6px'
    // display: 'flex',
  },
  relatorio: {
    border: `2px solid ${defColor.primary}`,
    padding: '48px',
    marginTop: '48px',
    borderRadius: '24px'
  }

}));

export default useStyles
