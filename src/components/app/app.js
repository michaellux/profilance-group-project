import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { HomePage, NewsPage } from '../pages';
import './app.css';

const App = () => {
  return (
    <div class="container">
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
    </div>
  )
};

export default App;