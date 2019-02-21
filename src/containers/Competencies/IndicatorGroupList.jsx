import React from 'react'

import IndicatorGroupItem from './IndicatorGroupItem'

class IndicatorGroupList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeIndicatorGroupId: '',
            checkedIndicatorIds: new Set()
        }
    }

    onSetActiveIndicatorGroup = indicatorGroupId => this.setState({activeIndicatorGroupId: indicatorGroupId});

    // wrong approach
    onCheckIndicator = indicatorId => {
        let nextCheckedIndicatorIds = this.state.checkedIndicatorIds;
        this.state.checkedIndicatorIds.has(indicatorId) ? nextCheckedIndicatorIds.delete(indicatorId) : nextCheckedIndicatorIds.add(indicatorId);
        this.setState({checkedIndicatorIds: nextCheckedIndicatorIds});
    }

    isIndicatorChecked = (indicatorId) => this.state.checkedIndicatorIds.has(indicatorId);

    render() {
        const {
            indicatorGroups
        } = this.props;
        return (
            <ul className="indicator-group-list">
                {indicatorGroups.map(group => {
                    return (
                        <IndicatorGroupItem 
                            indicatorGroup={group} 
                            activeIndicatorGroupId={this.state.activeIndicatorGroupId} 
                            onClick={this.onSetActiveIndicatorGroup}
                            onCheckIndicator={this.onCheckIndicator}
                            isIndicatorChecked={this.isIndicatorChecked}/>
                    );
                })}
            </ul>
        );
    }
}

export default IndicatorGroupList;