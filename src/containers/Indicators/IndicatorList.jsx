import React from 'react'

const IndicatorList = props => { 
    const {
        indicators,
        onChecked
    } = props;

    return (
        <ul className="indicator-list edit-list">
            {indicators.map(indicator => {
                return (
                    <li key={indicator.id} className="indicator-item">
                        {indicator.name}
                        <input className="delete-checkbox" type="checkbox" onChange={() => onChecked(indicator.id)}></input>
                    </li>
                );
            })}
        </ul>
    );
}

export default IndicatorList;