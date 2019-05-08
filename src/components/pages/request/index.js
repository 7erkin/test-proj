import React, { Fragment } from 'react'
import PropsTypes from 'prop-types'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'

import {
    Link
} from 'react-router-dom'

import RequestDateInput from './request-date-input';
import CompanySelect from './company-select';
import SubdivisionSelect from './subdivision-select/select-subdivision';
import PositionSelect from './select-position/select-position';
import PositionDescription from './position-description';
import ProfilePositionInput from './profile-position-input';
import RequestTabs from './request-tabs'

const optionsCreator = elements => elements.map(el => <option value={el.id}>{el.name}</option>)

const defineRequestName = request => !request ? 'Новая заявка' : `Заявка №${request.number}`;

const renderExistRequestDetails = (request) => {
    const {
        company,
        subdivision,
        position,
        dateCreate,
        dateApproval,
        agreements
    } = request;
    return (
            <div className="request-details"> 
                <RequestTabs />
                <label>Дата заявки</label>
                <input value={dateCreate} type="date" className="form-control" />
                {agreements ? 
                    (
                        <Fragment>
                            <label>Дата согласования</label>
                            <input value={dateApproval} type="date" className="form-control" />
                        </Fragment>
                    ) : 
                    null
                }
                <label>Компания</label>
                <input value={company} lassName="form-control" />
                <label>Подразделение/отдел</label>
                <input value={subdivision} lassName="form-control" />
                <label>Должность</label>
                <input value={position} lassName="form-control" />
                <PositionDescription />
            </div>
    );
}

const renderAddNewRequestForm = (
    companySelect,
    subdivisionSelect,
    positionSelect,
    onSubmit,
    onCancel
) => {
    return (
        <form onSubmit={evt => {evt.preventDefault(); onSubmit();}}>
            <RequestDateInput />
            <CompanySelect  onChange={companySelect.onChange} value={companySelect.value} >
                {optionsCreator(companySelect.values)}
            </CompanySelect>
            <SubdivisionSelect onChange={subdivisionSelect.onChange} value={subdivisionSelect.value} >
                {optionsCreator(subdivisionSelect.values)}
            </SubdivisionSelect>
            <PositionSelect onChange={positionSelect.onChange} value={positionSelect.value} >
                {optionsCreator(positionSelect.values)}
            </PositionSelect>
            <PositionDescription />
            <ProfilePositionInput />
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onCancel}>Отмена</button>
        </form>
    );
}

const RequestPageComponent = ({
    request,
    companySelect,
    subdivisionSelect,
    positionSelect,
    onSubmit,
    onCancel
}) => {

    const name = defineRequestName(request);

    return (
        <section className='request'>
            <h2>{name}</h2>
            {/* History might be formed in another way */}
            <Breadcrumbs>
                <a href="/requests">Список заявок</a>
                <a href="#">{name}</a>
            </Breadcrumbs>
            {
                request ? 
                renderExistRequestDetails(request) : 
                renderAddNewRequestForm(
                    companySelect,
                    subdivisionSelect,
                    positionSelect,
                    onSubmit,
                    onCancel
                )
            }
        </section>
    );
}

RequestPageComponent.defaultProps = {
    request: null
};


// conditional type checking
RequestPageComponent.propTypes = {
    companySelect: PropsTypes.shape({
        values: PropsTypes.arrayOf(PropsTypes.shape({
            id: PropsTypes.number.isRequired,
            name: PropsTypes.string.isRequired
        })),
        onChange: PropsTypes.func.isRequired
    }).isRequired,
    subdivisionSelect: PropsTypes.shape({
        values: PropsTypes.arrayOf(PropsTypes.shape({
            id: PropsTypes.number.isRequired,
            name: PropsTypes.string.isRequired
        })),
        onChange: PropsTypes.func.isRequired
    }).isRequired,
    positionSelect: PropsTypes.shape({
        values: PropsTypes.arrayOf(PropsTypes.shape({
            id: PropsTypes.number.isRequired,
            name: PropsTypes.string.isRequired
        })),
        onChange: PropsTypes.func.isRequired
    }).isRequired,
    request: PropsTypes.shape({
        id: PropsTypes.number.isRequired,
        number: PropsTypes.number,
        dateCreate: PropsTypes.string,
        dateApproval: PropsTypes.string,
        company: PropsTypes.string,
        position: PropsTypes.string,
        subdivision: PropsTypes.string,
        agreements: PropsTypes.bool
    }),
    onSubmit: PropsTypes.func.isRequired,
    onCancel: PropsTypes.func.isRequired
};

export default RequestPageComponent;