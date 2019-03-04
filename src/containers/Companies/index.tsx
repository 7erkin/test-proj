import React from 'react'

import {
    Switch,
    Route
} from 'react-router-dom'
import {connect} from 'react-redux'
import CompanyTable from './CompanyTable';
import CompanyEditor from './CompanyEditor';
import { Store } from '../../types/store';
import { CompanyStore, Subdivision, Company } from '../../types/company-page';

import mockData from '../../fixtures/company-page'
import IAction from '../../types/action';
import { saveLoadedCompanies, deleteSubdivisions, createCompany, updateCompany } from '../../store/actions/company';

interface IProps {
    companyStore: CompanyStore,
    dispatch(action: IAction): void,
    match: any
}

interface IState {}

class Companies extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(saveLoadedCompanies(JSON.stringify(mockData)));
    }

    onDeleteSubdivisions = (subdivisionsIds: Array<number>, companyId: number) => {
        this.props.dispatch(deleteSubdivisions(subdivisionsIds, companyId));
    }
    onCreateCompany = (company: Company) => {
        this.props.dispatch(createCompany(company));
    }
    onUpdateCompany = (company: Company) => {
        this.props.dispatch(updateCompany(company));
    }

    render() {
        return (
            <Switch>
                <Route exact={true} path="/companies" render={(props) => <CompanyTable {...props} copmanyStore={this.props.companyStore}/>} />
                <Route path="/companies/editor/:id" render={(props) => {
                    const id = Number(props.match.params.id);
                    const isNewCompany = isNaN(id);
                    const company = isNewCompany ? new Company({}) : this.props.companyStore.getCompanyById(Number(props.match.params.id));       
                    return <CompanyEditor 
                        {...props} 
                        company={company}
                        onCreateCompany={this.onCreateCompany}
                        onUpdateCompany={this.onUpdateCompany}
                        onDeleteSubdivisions={this.onDeleteSubdivisions}
                        isNew={isNewCompany}/>;
                }} />
            </Switch>
        );
    }
}

const putStateToProps = (store: Store) => {
    return {
        companyStore: store.companyStore
    };
}

export default connect(putStateToProps)(Companies);