import React from 'react'

import IndicatorGroupItem from './IndicatorGroupItem'

class IndicatorGroupList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeIndicatorGroupId: ''
        }
    }

    onSetActiveIndicatorGroup = indicatorGroupId => this.setState({activeIndicatorGroupId: indicatorGroupId});

    render() {
        return (
            <ul className="indicator-group-list">
                {this.props.indicatorGroups.map(group => {
                    return (
                        <IndicatorGroupItem
                            indicatorGroup={group} 
                            activeIndicatorGroupId={this.state.activeIndicatorGroupId} 
                            {...this.props}/>
                    );
                })}
            </ul>
        );
    }
}

export default IndicatorGroupList;