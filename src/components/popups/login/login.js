import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LogIn = ({ isOpened }) => {
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
          console.log('SimpleUser redirect');
          history.push(`${pathForPush}/simpleuser`);
          
        }
        break;
      case users.admin.login:
        if (password === users.admin.password) {
          console.log('Admin redirect');
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