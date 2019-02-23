import React from 'react'

import {
    Link
} from 'react-router-dom'

const CompetenceTableRow = props => {
    console.log(props.competence);
    return (
        <tr>
            <td>
                <Link to={`/competencies/competence-editor/${props.competence.id}`}>{props.competence.name}</Link>    
            </td>
            <td>
                {props.competence.description}
            </td>
        </tr>
    );
};

export default CompetenceTableRow;