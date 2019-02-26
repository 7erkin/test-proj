import React from 'react'

import IndicatorItem from './IndicatorItem'

class IndicatorList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {
            indicatorGroup,
            onChecked,
            onUnchecked,
            activeIndicatorGroupId,
            competence
        } = this.props;

        return (
            <ul className={`indicator-list ${indicatorGroup.id !== activeIndicatorGroupId ? 'indicator-list-hidden' : ''}`}>
                {
                    indicatorGroup.indicators.map(indicator => {
                        return (
                            <IndicatorItem 
                                indicator={indicator}
                                onChecked={onChecked}
                                onUnchecked={onUnchecked}
                                competence={competence}/>
                        );
                    })
                }
            </ul>
        );
    }
}

export default IndicatorList;