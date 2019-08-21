import React from 'react'

import {
    Switch,
    Route
  } from 'react-router-dom'

import AddCompanyForm from './add-company-form';
import CompaniesList from './companies-list';
import Company from './company';

const Companies = ({

}) => {

    return (
        <Switch>
            <Route exact path="/companies/new" render={(props) => <AddCompanyForm {...props} /> }/>
            <Route exact path="/companies" render={(props) => <CompaniesList {...props} /> }/>
            <Route path="/companies/:id/" render={(props) => <Company {...props} />} />
        </Switch>
    );
}

export default Companies;