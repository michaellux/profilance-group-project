import React from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LogIn = ({ isOpened }) => {
  const history = useHistory();

  return (
    <Dialog onClose={history.goBack} open={isOpened}>
      <form noValidate autoComplete="off" >
        <h2>Sign In</h2>
        <TextField label="Username"  />
        <TextField label="Password"  />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={history.goBack}
        >
          Send
        </Button>
      </form>
    </Dialog>
  );
};

export default LogIn;