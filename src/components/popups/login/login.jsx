import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';

import { Form } from 'react-final-form';
import { TextField, showErrorOnBlur } from 'mui-rff';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { DialogTitle, Grid } from '@material-ui/core';
import { userLogIn } from '../../../actions';

const useStyles = makeStyles(() => ({
  root: {
    '&': {
      padding: '2rem',
    },
    '& .loginForm__title': {
      paddingLeft: '0',
    },
    '& .MuiTypography-root': {
      fontSize: '3rem',
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
      textTransform: 'initial',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '1rem',
    },
  },
}));

const LoginDialog = ({ isOpened }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const users = {
    simpleUser: {
      login: 'simpleLogin',
      password: 'simplePassword',
    },
    admin: {
      login: 'admin',
      password: 'adminPassword',
    },
  };

  const validate = (values) => {
    const errors = {};
    if (!values.login) {
      errors.login = 'Введите логин';
    }
    if (!values.password) {
      errors.password = 'Введите пароль';
    }

    return errors;
  };

  const logIn = async ({ login, password }) => {
    const currPathName = window.location.pathname;

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
          return { password: 'Неправильный пароль' };
        }
        break;
      case users.admin.login:
        if (password === users.admin.password) {
          dispatch(userLogIn());
          history.push(`${pathForPush}/admin`);
        } else {
          return { password: 'Неправильный пароль' };
        }
        break;
      default:
        return { login: 'Такого пользователя не существует' };
    }

    return null;
  };

  return (
    <Dialog className="loginDialog" onClose={history.goBack} open={isOpened}>
      <Form
        onSubmit={logIn}
        validate={validate}
        render={({ handleSubmit, values, submitting }) => (
          <form
            className={`${classes.root} 
        loginDialog__form loginForm`}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <DialogTitle className="loginForm__title">Вход в систему</DialogTitle>
            <Grid className="loginForm__inputFieldsContainer inputFieldsContainer" container spacing={2}>
              <Grid className="inputFieldsContainer__item" item xs={6}>
                <InputLabel shrink htmlFor="login">
                  Логин
                </InputLabel>
                <TextField
                  id="login"
                  className="inputFieldsContainer__login"
                  name="login"
                  showError={showErrorOnBlur}
                />
              </Grid>
              <Grid className="inputFieldsContainer__item" item xs={6}>
                <InputLabel shrink htmlFor="password">
                  Пароль
                </InputLabel>
                <TextField
                  id="password"
                  className="inputFieldsContainer__password"
                  name="password"
                  showError={showErrorOnBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="loginForm__logInButton"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={submitting}
                >
                  Войти
                </Button>
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
              </Grid>
            </Grid>
          </form>
        )}
      />

    </Dialog>
  );
};

LoginDialog.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};

export default withRouter(
  (LoginDialog),
);
