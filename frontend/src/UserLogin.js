import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';

import useStyles from './style/UserLoginStyles';
// import loading from './img/general/loading.gif';

// import api from './services/Api'

export default function SignInSide() {
  const history = useHistory();

  const classes = useStyles();

  async function watchLogin() {
    history.push('/dashboard');
  }

  return (<Grid container="container" component="main" className={classes.root}>
    <CssBaseline />
    <Grid item="item" xs={false} sm={4} md={7} className={classes.image} />
    <Grid item="item" xs={12} sm={8} md={5} component={Paper} elevation={6} square="square">
      <div className={classes.paper}>
        <Typography component="h1" variant="h1">
          GreenHouse Sensors
        </Typography>
        <form className={classes.form} noValidate="noValidate">
          <Button className={classes.primaryButton} variant="contained" onClick={watchLogin} fullWidth="fullWidth">
            Entrar
          </Button>
        </form>
      </div>
    </Grid>
  </Grid>);
}
