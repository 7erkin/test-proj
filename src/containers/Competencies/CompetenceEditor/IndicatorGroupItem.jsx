import React from 'react'

import IndicatorGroupName from './IndicatorGroupName'
import IndicatorList from './IndicatorList'

// когда группа активна - показывать все индикаторы
// когда группа неактивна - показывать только отмеченные индикаторы
class IndicatorGroupItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {
            activeIndicatorGroupId,
            indicatorGroup,
            onChecked,
            onUnchecked,
            onSetActiveIndicatorGroup,
            competence
        } = this.props;
    
        debugger;
        return (
            <li key={indicatorGroup.id} className="card indicator-group-item">
                <IndicatorGroupName 
                    id={indicatorGroup.id}
                    name={indicatorGroup.name}
                    setActiveGroup={onSetActiveIndicatorGroup}/>
                <IndicatorList
                    activeIndicatorGroupId={activeIndicatorGroupId}
                    indicatorGroup={indicatorGroup} 
                    onChecked={onChecked}
                    onUnchecked={onUnchecked}
                    competence={competence}/>
            </li>
        );
    }
}

export default IndicatorGroupItem;