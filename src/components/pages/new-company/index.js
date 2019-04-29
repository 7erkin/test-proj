import React from 'react'
import AddEntityFormComponent from '../../common/add-entity-form-component';
import CopmanyNameInput from './company-name-input/company-name-input';
import AddressCompanyInput from './address-company-input';
import CompanySubdivisionInput from './company-subdivision-input';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';

const NewCompanyPageComponent = ({
    onSubmit, 
    onCancel
}) => {

    return (
        <section className='new-company'>
            <h2>Новая компания</h2>
            <Breadcrumbs>
                <a href="#">Все компании</a>
                <a href="#">Новая компания</a>
            </Breadcrumbs>
            <AddEntityFormComponent onSubmit={onSubmit} onCancel={onCancel}>
                <CopmanyNameInput />
                <AddressCompanyInput />
                <CompanySubdivisionInput />
            </AddEntityFormComponent>
        </section>
    );
}

export default NewCompanyPageComponent;