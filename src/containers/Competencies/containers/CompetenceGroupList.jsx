import React from 'react'

import {
    Link
} from 'react-router-dom'

class CompetenceGroupList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            competenceGroups,
            activeCompetenceGroupId,
            onSelectCompetenceGroup
        } = this.props;

        return (
            <ul className="competence-group-list">
                {competenceGroups.map(group => 
                    <li 
                        key={group.id} 
                        className={activeCompetenceGroupId == group.id ? 'active-competence-group-item' : ''} 
                        onClick={() => onSelectCompetenceGroup(group.id)}>
                        <Link to={`/competence/${group.id}`}>
                            {group.name}
                        </Link>
                  </li>)
                }
            </ul>
        );
    }
}