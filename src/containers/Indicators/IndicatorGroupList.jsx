import React from 'react'

const IndicatorGroupList = props => { 
    const {
        indicatorGroups,
        onChecked
    } = props;

    return (
        <ul className="indicator-group-list edit-list">
            {indicatorGroups.map(group => {
                return (
                    <li key={group.id} className="indicator-group-item">
                        {group.name}
                        <input className="delete-checkbox" type="checkbox" onChange={() => onChecked(group.id)}></input>
                    </li>
                );
            })}
        </ul>
    );
}

export default IndicatorGroupList;