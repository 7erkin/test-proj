import React from 'react'

const CompetenceGroupSelector = (props) => {
    const {
        competenceGroups,
        onSelect
    } = props;

    return (
        <select onChange={(event) => {
            onSelect(event.target.id);
        }}>
            <option>Select Competence Group</option>
            {competenceGroups.map(group => <option value={group.id}>{group.name}</option>)}
        </select>
    );
};

export default CompetenceGroupSelector;