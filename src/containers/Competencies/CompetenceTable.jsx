import React from 'react'

import CompetenceTableRow from './CompetenceTableRow';

const CompetenceTable = props => {
    console.log(props);
    return (
        <table>
            <tr>
                <th>Competence</th>
                <th>Description</th>
            </tr>
            {props.competencies.map(competence => <CompetenceTableRow competence={competence}/>)}
        </table>
    );
}

export default CompetenceTable;