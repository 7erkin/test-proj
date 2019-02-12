import React from 'react'

const onValidClick = event => event.target.tag = 'button';

const IndicatorList = props => {
    const {
        indicators,
        groupName,
        onIndicatorDelete,
        onIndicatorAdd,
        isEditModeOn
    } = props;

    return (
        <div>
            {isEditModeOn ? <button className="btn btn-success" onClick={onIndicatorAdd}>Добавить индикатор</button> : <div/>}
            <h2>Индикаторы группы: {groupName}</h2>
            <ul className="indicator-list">
                {indicators.map(indicator => {
                    return (
                        <li 
                            key={indicator.id} 
                            className="indicator-item" 
                            onClick={event => {
                                if(onValidClick(event))
                                    onIndicatorDelete(indicator.id);
                            }}>
                                {indicator.name}
                                {isEditModeOn ? <button className="btn btn-danger btn-sm">Удалить</button> : <div/>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default IndicatorList;