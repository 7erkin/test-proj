import React from 'react'
import CompaniesPageComponent from '../../../components/pages/companies-page';
import withStaffixService from '../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import {
    prepareLoadingCompanies,
    finishLoadingCompanies,
    saveLoadedCompanies,
    updateSearchCompanyBar
} from '../../../action-creators/companies-page'

class CompaniesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            dispatch,
            staffixService
        } = this.props;

        dispatch(prepareLoadingCompanies());
        staffixService.getCompanies()
            .then(companies => {
                dispatch(saveLoadedCompanies(companies));
                dispatch(finishLoadingCompanies());
            })
    }

    onAddCompanyClicked = () => this.props.history.push('/companies/new')

    onRowClicked = () => {}

    render() {
        const {
            loadingCompanies,
            companies
        } = this.props;

        if(loadingCompanies)
            return <h2>Loading...</h2>

        return (
            <CompaniesPageComponent 
                companies={companies} 
                onAddCompanyClicked={this.onAddCompanyClicked} 
                onRowClicked={this.onRowClicked}/>
        );
    }
}

const mapStoreToProps = ({companiesPage}) => {
    const {companies, loadingCompanies} = companiesPage;
    return {
        companies,
        loadingCompanies
    }
}

export default connect(mapStoreToProps)(withStaffixService(CompaniesPage));