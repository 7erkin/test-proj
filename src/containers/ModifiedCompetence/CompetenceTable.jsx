import React from 'react'

import CompetenceTableRow from './CompetenceTableRow';

const CompetenceTable = props => {
    return (
        <table>
            <th>
                <tr>Competence</tr>
                <tr>Description</tr>
            </th>
            {props.competencies.map(competence => <CompetenceTableRow competence={competence}/>)}
        </table>
    );
}