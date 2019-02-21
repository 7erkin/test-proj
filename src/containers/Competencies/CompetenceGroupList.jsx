import React from 'react'

const CompetenceGroupList = props => { 
    const {
        competenceGroups,
        onChecked
    } = props;

    return (
        <ul className="competence-group-list edit-list">
            {competenceGroups.map(group => {
                return (
                    <li key={group.id} className="competence-group-item">
                        {group.name}
                        <input className="delete-checkbox" type="checkbox" onChange={() => onChecked(group.id)}></input>
                    </li>
                );
            })}
        </ul>
    );
}

export default CompetenceGroupList;