import React from 'react'
import CompaniesPageComponent from '../../../components/pages/companies-page';
import companies from '../../../fixtures/companies'

class CompaniesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddCompanyClicked = () => this.props.history.push('/companies/new')

    onRowClicked = () => {}

    render() {
        return (
            <CompaniesPageComponent 
                companies={companies} 
                onAddCompanyClicked={this.onAddCompanyClicked} 
                onRowClicked={this.onRowClicked}/>
        );
    }
}

export default CompaniesPage;