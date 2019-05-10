import React from 'react'

import './style.css'
import RequestHeader from '../../common-custom/request-header/request-header';

const ExistRequest = ({
    name,
    children
}) => {

    return (
        <RequestHeader name={name}>
            {
                children
            }
        </RequestHeader>
    );
}

export default ExistRequest;