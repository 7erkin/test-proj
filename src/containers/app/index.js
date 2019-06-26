import React from 'react'

import AppComponent from '../../components/material-ui/app'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import RequestsPage from '../pages/requests'
import CompaniesPage from '../pages/companies'
import LibraryPage from '../pages/library'

const AppContainer = () => {
  return (
    <AppComponent>
      <Switch>
        <Redirect exact from="/" to="/requests" />
        <Route path="/companies" render={(props) => <CompaniesPage {...props}/>} />
        <Route exact path="/requests" render={(props) => <RequestsPage {...props} />} />
        {/* <Route exact path="/requests/new" component={NewRequestPage} />
        <Route exact path="/requests/:id" render={(props) => {
          return <ExistRequestPage {...props}/>;
        }} /> */}
        <Route path="/library/" component={LibraryPage} />
      </Switch>
    </AppComponent>
  );
}

export default AppContainer;