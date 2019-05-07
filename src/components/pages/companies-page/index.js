import React from 'react'
import AddCompanyButtonComponent from './add-company-button-component';
import CompanyTableComponent from './company-table-component';
import Search from '../../bootstrap/search';

const CompaniesPageComponent = ({
    companies,
    companiesSearch,
    onRowClicked,
    onAddCompanyClicked
}) => {
    return (
        <section className="companies-page">
            <h2>Список компаний</h2>
            <AddCompanyButtonComponent onClick={onAddCompanyClicked}>Добавить компанию</AddCompanyButtonComponent>
            <Search {...companiesSearch} placeholder='Поиск по компании' />
            <CompanyTableComponent 
                rowCount={companies.length}
                rowGetter={({index}) => companies[index]}
                onRowClicked={onRowClicked}/>
        </section>
    );
}

export default CompaniesPageComponent;