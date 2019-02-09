import React from 'react'

import IndicatorList from './IndicatorList'
import GroupDescription from './GroupDescription'
import IndicatorSearch from './IndicatorSearch'

const filterByPattern = (indicators, pattern) => {
    return indicators.filter(indicator => indicator.name.indexOf(pattern) != -1);
}

class GroupInfo extends React.Component {
    constructor(props){
        super(props);
        console.log('group info: ', props);
        const id = this.props.match.params.id;
        const group = this.props.groups[Number(id)];
        this.state = {
            groupId: group.id,
            indicators: group.indicators,
            visibleIndicators: group.indicators,
            pattern: ''
        }
    }
    onSearchChange = pattern => {
        const indicators = this.state.indicators;
        this.setState({
            pattern,
            visibleIndicators: filterByPattern(indicators, pattern)
        });
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        const id = nextProps.match.params.id;
        const group = Object.assign({}, nextProps.groups[Number(id)]);

        if(group.id == prevState.groupId) return null;
        console.log('group info props: ', nextProps);
        return {
            groupId: group.id,
            indicators: group.indicators,
            visibleIndicators: filterByPattern(group.indicators, prevState.pattern)
        };
    }

    render() {
        const id = this.props.match.params.id;
        const description = this.props.groups[Number(id)].description;
        const groupName = this.props.groups[Number(id)].name;
        const group = this.props.groups[Number(id)];
        return (
            <section className="group-info">
                <IndicatorSearch onSearchChange={this.onSearchChange}/>
                <GroupDescription description={description}/>
                <IndicatorList 
                    groupId={group.id}
                    groupName={groupName}
                    indicators={this.state.visibleIndicators}
                    onIndicatorAdd={this.props.onAddIndicatorFormOpen}
                    onIndicatorDelete={this.props.onIndicatorDelete}
                    isEditModeOn={this.props.isEditModeOn}/>
            </section>
        );
    }
}

export default GroupInfo;