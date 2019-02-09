import React from 'react'
import AddIndicatorButton from './add-indicator-button'
import AddIndicatorGroupButton from './add-indicator-group-button'
import IndicatorTable from './indicator-table'
import IndicatorGroupList from './indicator-group-list'
import SearchIndicators from './indicator-search'

const getIndicatorsByGroupId = (groups, groupId) => {
    let index = 0;
    groups.some((group, value) => {
        if(group.id === Number(groupId)) {
            index = value;
            return true;
        } 
        return false;
    });
    return groups[index].indicators;
};

const getIndicatorsByPattern = (indicators, pattern) => indicators.filter(indicator => indicator.indexOf(pattern) != -1);

class IndicatorList extends React.Component {
    constructor(props) {
        super(props);

        const groupId = Number(this.props.match.params.indicatorGroupId);
        const groups = this.props.indicatorGroups;
        const indicators = getIndicatorsByGroupId(groups, groupId);

        this.state = {
            groupId,
            groups,
            indicators,
            visibleIndicators: indicators
        };
    }
    componentWillReceiveProps(nextProps) {
        const groupId = Number(this.props.match.params.indicatorGroupId);
        const groups = this.props.indicatorGroups;
        const indicators = getIndicatorsByGroupId(groups, groupId);

        this.setState({
            groupId,
            groups,
            indicators,
            visibleIndicators: indicators
        });
    }
    onIndicatorSearch = (indicatorPatternName) => {
        this.setState({
            visibleIndicators: getIndicatorsByPattern(this.state.indicators, indicatorPatternName)
        });
    }
    render() {
        console.log('Render with state: ', this.state);
        return (
            <div>
                <AddIndicatorButton />
                <SearchIndicators onIndicatorSearch={this.onIndicatorSearch} />
                <IndicatorGroupList indicatorGroups={this.state.groups} activeIndicatorGroupId={this.state.groupId}/>
                <IndicatorTable indicators={this.state.visibleIndicators}/>
                <AddIndicatorGroupButton />
            </div>
        );
    }
}

export default IndicatorList;