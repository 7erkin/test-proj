import React from 'react'

import {
    Link
} from 'react-router-dom'

const isCompetenceGroupActive = (activeGroupId, groupId) => activeGroupId === groupId ? 'active-competence-group' : '';

const CompetenceGroupList = props => {
    const {
        competenceGroups,
        activeGroupId,
        onGroupSelect
    } = props;

    return (
        <ul className="competence-group-list">
            {competenceGroups.map(group => {
                return (
                    <li onClick={() => onGroupSelect(group.id)} key={group.id} className={isCompetenceGroupActive(activeGroupId, group.id)}>
                        <Link to={`/competencies/group-info/${group.id}`}>
                            {group.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default CompetenceGroupList;