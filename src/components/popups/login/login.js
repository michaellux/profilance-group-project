import React from "react";
import { useHistory, withRouter } from "react-router-dom";

import { Field, reduxForm } from 'redux-form'

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { userLogIn } from '../../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
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
    <Dialog onClose={history.goBack} open={isOpened}>
      <form className={classes.root} onSubmit={logIn} autoComplete="off" >
        <h2>Log In</h2>
        <Field name="login" component={ renderTextField } label="Login" />
        <Field name="password" component={renderTextField} label="Password" type="password" />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Send
        </Button>
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