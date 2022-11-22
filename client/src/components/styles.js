import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  /* container : {
    backgroundColor:"#0f0e13",
  }, */

  paper: {
    
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: {
      default: "#f50057",
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    width: '100%',
    height: '2.5rem',
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginTop: theme.spacing(2),
  },
  mynew:{
    margin: theme.spacing(2,0,2)
  }
}));

/* theme.palette.secondary.main */