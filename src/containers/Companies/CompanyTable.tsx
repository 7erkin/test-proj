import React from 'react'
import { CompanyStore, Company } from '../../types/company-page';

import {
    Link
} from 'react-router-dom'

interface IProps {
    copmanyStore: CompanyStore
}

interface IState {
    activeCompanyId: number;
    activeSubdivisionId: number
}

const ALL_COMPANIES_VISIBLE: number = -1;
const ALL_SUBDIVISIONS_VISIBLE: number = -1;

const renderAllCompanies = (companies: Array<Company>) => {
    return companies.map(company => company.subdivisions.map(subdivision => {
        return (
            <tr>
                <td>
                    <Link to={`/companies/editor/${company.id}`}>{company.name}</Link>
                </td>
                <td>{subdivision.name}</td>
                <td>{subdivision.description}</td>
            </tr>
        );
    }));
}

const renderCompany = (company: Company, activeSubdivisionId: number) => {
    const matchedSubdivisions = activeSubdivisionId === ALL_SUBDIVISIONS_VISIBLE ? company.subdivisions : company.subdivisions.filter(subdivision => subdivision.id === activeSubdivisionId);
    return matchedSubdivisions.map(subdivision => {
        return (
            <tr>
                <td>
                    <Link to={`/companies/editor/${company.id}`}>{company.name}</Link>
                </td>
                <td>{subdivision.name}</td>
                <td>{subdivision.description}</td>
            </tr>
        );
    });
}

class CompanyTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            activeCompanyId: ALL_COMPANIES_VISIBLE,
            activeSubdivisionId: ALL_SUBDIVISIONS_VISIBLE
        }
    }

    onSelectCopmpany = (companyId: number) => this.setState({activeCompanyId: companyId, activeSubdivisionId: ALL_SUBDIVISIONS_VISIBLE});

    onSelectSubdivision = (subdivisionId: number) => this.setState({activeSubdivisionId: subdivisionId});

    render() {
        const companies = this.props.copmanyStore.companies;
        if(!companies.length) return <div>No companies yet...</div>;
        
        const activeCompany = this.props.copmanyStore.getCompanyById(this.state.activeCompanyId);

        return (
            <section>
                <select value={this.state.activeCompanyId} onChange={event => this.onSelectCopmpany(Number(event.target.value))}>
                    <option value={ALL_COMPANIES_VISIBLE}>All companies</option>
                    {companies.map(company => <option value={company.id}>{company.name}</option>)}
                </select>
                {
                    this.state.activeCompanyId !== ALL_COMPANIES_VISIBLE ? 
                    <select value={this.state.activeSubdivisionId} onChange={event => this.onSelectSubdivision(Number(event.target.value))}>
                        <option value={ALL_SUBDIVISIONS_VISIBLE}>All subdivisions</option>
                        {activeCompany.subdivisions.map(subdivision => <option value={subdivision.id}>{subdivision.name}</option>)}
                    </select> : ''
                }
                <Link to="/companies/editor/new">Add company</Link>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Subdivision</th>
                        <th>Description</th>
                    </tr>
                    {
                        this.state.activeCompanyId === ALL_COMPANIES_VISIBLE ? 
                        renderAllCompanies(companies) : 
                        renderCompany(activeCompany, this.state.activeSubdivisionId)
                    }
                </table>
            </section>
        );
    }
}

export default CompanyTable;