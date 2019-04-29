import React from 'react'

import Breadcrumbs from '@material-ui/lab/Breadcrumbs'

import AddEntityFormComponent from '../../common/add-entity-form-component';
import RequestDateInput from './request-date-input';
import CompanySelect from './company-select';
import SubdivisionSelect from './subdivision-select/select-subdivision';
import PositionSelect from './select-position/select-position';
import PositionDescription from './position-description';
import ProfilePositionInput from './profile-position-input';

const optionsCreator = elements => elements.map(el => <option value={el.id}>{el.name}</option>)

const NewRequestPageComponent = ({
    companySelect,
    subdivisionSelect,
    positionSelect,
    onSubmit,
    onCancel
}) => {
    const {
        values: companies,
        onChange: onCompanyChange
    } = companySelect;

    const {
        values: subdivisions,
        onChange: onSubdivisionChange
    } = subdivisionSelect;

    const {
        values: positions,
        onChange: onPositionChange
    } = positionSelect;

    return (
        <section className='request-details'>
            <h2>Новая заявка</h2>
            <Breadcrumbs>
                <a href="#">Список заявок</a>
                <a href="#">Новая заявка</a>
            </Breadcrumbs>
            <AddEntityFormComponent onSubmit={onSubmit} onCancel={onCancel}>
                <RequestDateInput />
                <CompanySelect onChange={onCompanyChange}>
                    {optionsCreator(companies)}
                </CompanySelect>
                <SubdivisionSelect onChange={onSubdivisionChange}>
                    {optionsCreator(subdivisions)}
                </SubdivisionSelect>
                <PositionSelect onChange={onPositionChange}>
                    {optionsCreator(positions)}
                </PositionSelect>
                <PositionDescription />
                <ProfilePositionInput />
            </AddEntityFormComponent>
        </section>
    );
}

export default NewRequestPageComponent;