import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import signupsvg from '../assets/svg/signupsvg.svg'
import myshoplogo from '../assets/img/myshoplogo.png'
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 12,
      paddingBottom: 0,
      backgroundColor: "#F9F9F9",
      flexGrow: 1,
      minHeight: 500,
    },
    wrapper: {
      flexGrow: 1,
    },
    svgbanner: {
      width: '75%',
      marginTop: 100,
      marginBottom: 60,
    },
    rightbg: {
      background: '#F7E6F2',
      alignItems: 'center',
      textAlign: 'center',
    },
    leftform: {
      alignItems: 'center',
      textAlign: 'center',
      background: '#FFF',
    },
    logo: {
      height: 75,
      marginTop: 80,
      marginBottom: theme.spacing(3),
    },
    typography: {
      marginBottom: theme.spacing(3),
    },
    form: {
      minWidth: 300,
      maxWidth: 400,
      marginTop: theme.spacing(2),
      alignItems: 'center',
      margin: 'auto',
      paddingBottom: 140,
    },
    Buttonwrapper: {
      width: '96%',
      marginLeft: 23,
    },
    submit: {
      margin: theme.spacing(4, 0, 2),
      borderRadius: 100,
      paddingTop: 13,
      paddingBottom: 13,
      background: 'linear-gradient(45deg, #F55699 30%, #CB2870 90%)',
    },
    icon: {
      color: '#E11785',
      marginBottom: 10,
    },
    fontright: {
      textAlign: 'right',
      color: '#0000008a',
      textDecoration: 'none',
      alignItems: 'right',
      textAlignLast: 'right',
      marginLeft: 80,
    },
    fontleft: {
      textAlign: 'left',
      marginLeft: 20,
      color: '#0000008a',
      textDecoration: 'none',
    },
  })
);

const Signup: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.wrapper}>
        <Grid item xs={6} className={classes.leftform}>
          <img src={myshoplogo} className={classes.logo} alt={myshoplogo} />
          <Typography className={classes.typography} variant="body2" display="block" gutterBottom color="textSecondary">
            Please complete to create your account. 
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item  xs={2} className={classes.icon}>
                <AccountCircle />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="fname"
                  name="fname"
                  label="First Name"
                  margin="normal"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item  xs={2} className={classes.icon}>
                <AccountCircle />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="lname"
                  name="lname"
                  label="Last Name"
                  margin="normal"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item  xs={2} className={classes.icon}>
                <AccountCircle />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  margin="normal"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={2} className={classes.icon}>
                <LockIcon />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={2} className={classes.icon}>
                <LockIcon />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="conpassword"
                  label="Confirm Password"
                  type="password"
                  id="conpassword"
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.Buttonwrapper}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disableElevation
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Link to="#" className={classes.fontleft}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link to="/signin" className={classes.fontright}>
                  Signin
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={6} className={classes.rightbg}>
          <img src={signupsvg} className={classes.svgbanner} alt={signupsvg} />
        </Grid>
      </Grid>
    </div>
  )
}

export default  Signup;
