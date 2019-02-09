import React from 'react'

import CompanyList from './components/CompanyList'
import CandidatesCompany from './components/CandidatesCompany'
import AddCompanyForm from './components/AddCompanyForm'

import fixturesCompanies from '../../fixtures/companies'

import {Switch, Route, Redirect} from 'react-router-dom'

class Candidates extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="horizontal-wrapper">
                <CompanyList companies={fixturesCompanies} />
                <Switch>
                    <Redirect exact={true} from='/candidates/' to='/candidates/0' />
                    <Route path='/candidates/:companyid' component={CandidatesCompany} />
                    <Route path='/candidates/addcompany' component={AddCompanyForm} />
                </Switch>
            </div>
        );
    }
}

export default Candidates;