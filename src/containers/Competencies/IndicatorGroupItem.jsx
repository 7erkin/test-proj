import React from 'react'



// когда группа активна - показывать все индикаторы
// когда группа неактивна - показывать только отмеченные индикаторы
const IndicatorGroupItem = props => {
    const {
        activeIndicatorGroupId,
        indicatorGroup,
        onClick,
        isIndicatorChecked,
        onCheckIndicator
    } = props;

    return (
        <li key={indicatorGroup.id} className="card indicator-group-item">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link" onClick={() => onClick(indicatorGroup.id)} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {indicatorGroup.name}
                    </button>
                </h5>
            </div>
            <ul className={`indicator-list ${indicatorGroup.id !== activeIndicatorGroupId ? 'indicator-list-hidden' : ''}`}>
                {indicatorGroup.indicators.map(indicator => <li key={indicator.id} className={`indicator-item ${isIndicatorChecked(indicator.id) ? '' : 'indicator-item-hidden'}`}>
                    {indicator.name}
                    <select value={-1}>
                        
                    </select>
                    <input type="checkbox" onChange={() => onCheckIndicator(indicator.id)}/>
                </li>)}
            </ul>
        </li>
    );
}

export default IndicatorGroupItem;