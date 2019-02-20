import React from 'react'

import {
    Link
} from 'react-router-dom'

const CompetenceTableRow = props => {
    return (
        <tr>
            <td>
                <Link to={`.../${props.competence.id}`}>props.competence.name</Link>    
            </td>
            <td>
                props.competence.description
            </td>
        </tr>
    );
};

export default CompetenceTableRow;