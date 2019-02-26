import React from 'react'
import { CompetenceGroup } from '../types';
import { NO_VALUE } from '../../../library';

interface Props {
    groupId: number,
    competenceGroups: Array<CompetenceGroup>
    onChange: (groupId: number) => void
}

const CompetenceGroups = (props: Props) => {
    const {
        groupId,
        onChange,
        competenceGroups
    } = props;

    return (
        <select onChange={event => onChange(Number(event.target.value))} value={groupId}>
            <option value={NO_VALUE}>Change group</option>
            {competenceGroups.map(group => <option value={group.id}>{group.name}</option>)}
        </select> 
    );
}

export default CompetenceGroups;