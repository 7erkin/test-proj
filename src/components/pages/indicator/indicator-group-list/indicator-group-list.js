import React from 'react'

import './indicator-group-list.css'

const IndicatorGroupList = ({indicatorGroups, renderListItem}) => {
    return (
        <ul className="indicator-group-list">
            {
                indicatorGroups.map(group => <li key={group.id}>{renderListItem(group)}</li>)
            }
        </ul>
    );
}

export default IndicatorGroupList;