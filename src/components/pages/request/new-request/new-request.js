import React from 'react'

import './style.css'

import RequestDateInput from '../request-date-input'
import CompanySelect from '../company-select'
import SubdivisionSelect from '../subdivision-select'
import PositionSelect from '../select-position'
import PositionDescription from '../position-description'
import ProfilePositionInput from '../profile-position-input'

const optionsCreator = elements => elements.map(el => <option value={el.id}>{el.name}</option>)

const NewRequestComponent = ({
    requestDate,
    companySelect,
    subdivisionSelect,
    positionSelect,
    onSubmit,
    onCancel
}) => { 
    return (
        <form onSubmit={evt => {evt.preventDefault(); onSubmit();}}>
            <div className="line date">
                <RequestDateInput value={requestDate.value} onChange={requestDate.onChange} />
            </div>
            <div className="line">
                <CompanySelect onChange={companySelect.onChange} value={companySelect.value} >
                    {optionsCreator(companySelect.values)}
                </CompanySelect>
            </div>
            <div className="line">
                <SubdivisionSelect onChange={subdivisionSelect.onChange} value={subdivisionSelect.value} >
                    {optionsCreator(subdivisionSelect.values)}
                </SubdivisionSelect>
            </div>
            <div className="line">
                <PositionSelect onChange={positionSelect.onChange} value={positionSelect.value} >
                    {optionsCreator(positionSelect.values)}
                </PositionSelect>
            </div>
            <div className="line">
                <PositionDescription />
            </div>
            <div className="line">
                <ProfilePositionInput />
            </div>
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onCancel}>Отмена</button>
        </form>
    );
}

export default NewRequestComponent;