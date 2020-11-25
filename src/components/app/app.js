import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { HomePage, NewsPage } from '../pages';
import GetParameterPopups from "../popups/GetParameterPopups";
import './app.css';

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route 
        path="/"
        component={HomePage} 
        exact />
      <Route
        path="/news"
        component={NewsPage}
        exact />
    </Switch>
      <GetParameterPopups />
    </>
  )
};

export default App;