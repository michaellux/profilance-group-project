import React from "react";
import { useHistory, withRouter } from "react-router-dom";

import { Field, reduxForm } from 'redux-form'

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { userLogIn } from '../../../actions';
import { DialogTitle, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '&': {
      padding: '2rem'
    },
    '& .loginForm__title': {
      paddingLeft: '0'
    },
    '& .MuiTypography-root': {
      fontSize: '3rem'
    },
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& .MuiFormLabel-root': {
      fontSize: '2rem',
    },
    '& .MuiButton-containedSecondary': {
      width: '100%',
      fontSize: '1.5rem',
      textTransform: 'initial'
    },
    '& .MuiFormHelperText-root': {
      fontSize: '1rem'
    }
  },
}));

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />);

const LogIn = ({ isOpened }) => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const users = {
    simpleUser: {
      login: 'simpleLogin',
      password: 'simplePassword'
    },
    admin: {
      login: 'admin',
      password: 'adminPassword'
    }
  };

  const logIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const login = formData.get('login');
    const password = formData.get('password');
    const currPathName = window.location.pathname;
    console.log(currPathName);

    let pathForPush = '';
    if (currPathName !== '/') {
      pathForPush = currPathName;
    }

    switch (login) {
      case users.simpleUser.login:
        if (password === users.simpleUser.password) {
          dispatch(userLogIn());
          history.push(`${pathForPush}/simpleuser`);
        } else {
          alert('Неправильный пароль');
        }
        break;
      case users.admin.login:
        if (password === users.admin.password) {
          dispatch(userLogIn());
          history.push(`${pathForPush}/admin`);
        } else {
          alert('Неправильный пароль');
        }
        break;
      default:
        alert('Неправильный логин');
        break;
    }
  };

  return (
    <Dialog className="loginDialog" onClose={history.goBack} open={isOpened}>
      <form className={`${classes.root} loginDialog__form loginForm`} onSubmit={logIn} autoComplete="off" >
        <DialogTitle className="loginForm__title">Вход в систему</DialogTitle>
        <Grid className="loginForm__inputFieldsContainer inputFieldsContainer" container spacing={2}>
          <Grid className="inputFieldsContainer__item" item xs={6}>
            <InputLabel shrink htmlFor="login">
              Логин
          </InputLabel>
            <Field
              id="login"
              className="inputFieldsContainer__login"
              name="login"
              component={renderTextField}
            />
          </Grid>
          <Grid className="inputFieldsContainer__item" item xs={6}>
            <InputLabel shrink htmlFor="password">
              Пароль
          </InputLabel>
            <Field
              id="password"
              className="inputFieldsContainer__password"
              name="password"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="loginForm__logInButton"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Войти
            </Button>
          </Grid>
        </Grid>

      </form>
    </Dialog>
  );
};

export default withRouter(
  reduxForm(
    {
      form: 'LoginForm'
    }
  )
    (LogIn)
);