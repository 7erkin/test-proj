import React from 'react'
import PropsTypes from 'prop-types'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'

import {
    Link
} from 'react-router-dom'

import './style.css'
import ExistRequest from './exist-request';
import NewRequest from './new-request';

const defineRequestName = request => !request ? 'Новая заявка' : `Заявка №${request.number}`;

const RequestPageComponent = ({
    request,
    requestDate,
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
            <div className='request-details'>
            {
                request ? 
                <ExistRequest request={request} /> :
                <NewRequest 
                    requestDate={requestDate}
                    companySelect={companySelect}
                    subdivisionSelect={subdivisionSelect}
                    positionSelect={positionSelect}
                    onSubmit={onSubmit}
                    onCancel={onCancel} /> 
            }
            </div>
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