import React from 'react'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'

import './style.css'

const RequestHeader = ({
    name,
    children
}) => {
    return (
        <section className='request'>
            <h2>{name}</h2>
            <Breadcrumbs>
                <a href="/requests">Список заявок</a>
                <a href="#">{name}</a>
            </Breadcrumbs>
            <div className='request-details'>
                {children}
            </div>
        </section>
    );
}

export default RequestHeader;