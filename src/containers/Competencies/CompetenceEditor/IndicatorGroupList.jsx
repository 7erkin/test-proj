import React from 'react'

import IndicatorGroupItem from './IndicatorGroupItem'

class IndicatorGroupList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeIndicatorGroupId: ''
        }
    }

    onSetActiveIndicatorGroup = (indicatorGroupId) => this.setState({activeIndicatorGroupId: indicatorGroupId});

    render() {
        const {
            indicatorGroups,
            onChecked,
            isIndicatorChecked,
            onUnchecked,
            getIndicatorInfluence,
            competence
        } = this.props;

        debugger;
        return (
            <ul className="indicator-group-list">
                {indicatorGroups.map(group => {
                    return (
                        <IndicatorGroupItem
                            competence={competence}
                            indicatorGroup={group} 
                            activeIndicatorGroupId={this.state.activeIndicatorGroupId} 
                            onSetActiveIndicatorGroup={this.onSetActiveIndicatorGroup}
                            onChecked={onChecked} 
                            onUnchecked={onUnchecked} />
                    );
                })}
            </ul>
        );
    }
}

export default IndicatorGroupList;