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
            <Route path="/companies/new" render={(props) => <AddCompanyForm {...props} /> }/>
            <Route path="/companies" render={(props) => <CompaniesList {...props} /> }/>
            <Route path="/companies/:id" render={() => <Company />} />
        </Switch>
    );
}

export default Companies;