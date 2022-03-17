import { createTheme, makeStyles } from '@material-ui/core/styles';

const theme = createTheme();

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    border: '1px solid #000',
    backgroundColor: 'red',
  },
  containerLeft: {
    border: '1px solid #d6d6d6',
    maxWidth: '20%',
    display: 'relative',
    justifyContent: 'flex-start',
  },
  containerRight: {
    border: '1px solid #d6d6d6',
    margin: '0 auto',
  },
  box: {
    backgroundColor: '#fff',
    color: 'red',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  contentsLeft: {
    backgroundColor: '#f5f5f5',
    color: 'red',
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    border: '1px solid #d6d6d6',
  },
  contentsRight: {
    backgroundColor: 'red',
    color: 'red',
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}));

export default useStyles;
