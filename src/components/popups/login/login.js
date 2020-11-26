import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../../actions';

const LogIn = ({ isOpened }) => {

  const app = useSelector(state => state.app);
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
        }
        break;
      case users.admin.login:
        if (password === users.admin.password) {
          dispatch(userLogIn());
          history.push(`${pathForPush}/admin`);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Dialog onClose={history.goBack} open={isOpened}>
      <form onSubmit={logIn} noValidate autoComplete="off" >
        <h2>Log In</h2>
        <TextField name="login" type="text" label="Login" />
        <TextField name="password" type="password" label="Password" />
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

export default withRouter(LogIn);