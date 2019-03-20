import React from 'react'
import { Link } from 'react-router-dom';
import { UNDEFINED } from '../../../../utils';

const CompanySelector = ({
    companies,
    selectedCompanyId, 
    onCompanyChange
}) => {
    return (
        <section className="company-table">
            <select value={selectedCompanyId} onChange={(evt) => onCompanyChange(evt.target.value)}>
                <option value={UNDEFINED}>All companies</option>
                {companies.map(el => <option value={el.id}>{el.name}</option>)}
            </select>
            <Link to="/companies/editor">Add company</Link>
        </section>
    );
}

export default CompanySelector;