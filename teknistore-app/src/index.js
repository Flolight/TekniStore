import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './views/Dashboard';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Stock from "./views/Stock"
import Gigs from "./views/Gigs"
import Profile from "./views/Profile"
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/stock" component={Stock} />
        <Route path="/gigs" component={Gigs} />
        <Route path="/profile" component={Profile} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
