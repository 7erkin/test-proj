import React from 'react'

import AppComponent from '../../components/material-ui/app'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import RequestsPage from '../pages/requests'
import NewRequestPage from '../pages/new-request';
import CompaniesPage from '../pages/companies';
import NewCompanyPage from '../pages/new-company/new-company';
import ExistRequestPage from '../pages/exist-request'

const AppContainer = () => {
  return (
    <AppComponent>
      <Switch>
        <Redirect exact from="/" to="/requests" />
        <Route exact path="/companies" render={(props) => <CompaniesPage {...props}/>} />
        <Route exact path="/companies/new" component={NewCompanyPage} />
        <Route exact path="/requests" render={(props) => <RequestsPage {...props} />} />
        <Route exact path="/requests/new" component={NewRequestPage} />
        <Route exact path="/requests/:id" render={(props) => {
          return <ExistRequestPage {...props}/>;
        }} />
      </Switch>
    </AppComponent>
  );
}

export default AppContainer;