import React from 'react'
import CompanySelector from '../company-selector';

const CompanyViewer = ({
    companies,
    selectedCompanyId, 
    onCompanyChange,
    children
}) => {
    return (
        <section className="company-viewer">
            <CompanySelector 
                selectedCompanyId={selectedCompanyId}
                companies={companies}
                onCompanyChange={onCompanyChange} />
                {children}
        </section>
    );
}

export default CompanyViewer;