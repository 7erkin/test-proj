import React from 'react'

import {
    Link
} from 'react-router-dom'

const isIndicatorGroupActive = (activeGroupId, groupId) => activeGroupId === groupId ? 'active-indicator-group' : '';

const IndicatorGroupList = props => {
    const {
        indicatorGroups,
        activeGroupId,
        onGroupSelect
    } = props;

    return (
        <ul className="indicator-list">
            {indicatorGroups.map(group => {
                return (
                    <li onClick={() => onGroupSelect(group.id)} key={group.id} className={isIndicatorGroupActive(activeGroupId, group.id)}>
                        <Link to={`/indicators/indicator-editor/${group.id}`}>
                            {group.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default IndicatorGroupList;