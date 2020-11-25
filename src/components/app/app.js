import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { HomePage, NewsPage, AdminPage, SimpleUserPage } from '../pages';
import GetParameterPopups from "../popups/GetParameterPopups";
import './app.css';

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          component={HomePage} />
        <Route
          path="/admin"
          component={AdminPage}
          isLoggedIn={false}
        />
        <Route
          path="/simpleuser"
          component={SimpleUserPage}
          isLoggedIn={false}
        />
        <Route
          path="/news"
          component={NewsPage} />
      </Switch>
      <GetParameterPopups isLoggedIn={false} />
    </>
  );
};

export default App;