import React, {Fragment} from 'react'

import './style.css';

import { Link } from 'react-router-dom';

const RequestDescription = ({
    request
}) => {
    const {
        company,
        subdivision,
        position,
        dateCreate,
        dateApproval,
        agreements,
        vacancyDescription
    } = request;
    return (
            <Fragment> 
                <div className="line date">
                    <label>Дата заявки</label>
                    <p>{dateCreate}</p>
                    {agreements ? 
                        (
                            <Fragment>
                                <label>Дата согласования</label>
                                <p>{dateApproval}</p>
                            </Fragment>
                        ) : 
                        null
                    }
                </div>
                <div className="line">
                    <label>Компания</label>
                    <p>{company}</p>
                </div>
                <div className="line">
                    <label>Подразделение/отдел</label>
                    <p>{subdivision}</p>
                </div>
                <div className="line">
                    <label>Должность</label>
                    <p>{position}</p>
                </div>
                <div className="line">
                    <label>Описание</label>
                    <p>{vacancyDescription}</p>
                </div>
                <div className="line">
                    <label>Профиль должности</label>
                    <Link to={`/requests/${request.id}/profile`} download>Профиль должности_СТО.pdf</Link>
                </div>
            </Fragment>
    );
}

export default RequestDescription;