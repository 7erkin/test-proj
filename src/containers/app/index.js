import React from 'react'

import AppComponent from '../../components/material-ui/app'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import RequestsPage from '../pages/requests'
import RequestPage from '../pages/request';

const AppContainer = () => {
  return (
    <AppComponent>
      <Switch>
        <Redirect exact from="/" to="/requests" />
        <Route exact path="/companies" component={null} />
        <Route exact path="/requests" render={(props) => <RequestsPage {...props} />} />
        <Route exact path="/requests/new" component={RequestPage} />
        <Route exact path="/requests/:id" render={(props) => {
          return null;
        }} />
      </Switch>
    </AppComponent>
  );
}

export default AppContainer;