import React from 'react'

import SearchLine from './SearchLine';
import RemoveIndicatorGroupForm from './RemoveIndicatorGroupForm'

const findByPattern = (indicatorGroups, pattern) => indicatorGroups.filter(group => group.name.indexOf(pattern) !== -1);

class IndicatorGroupEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            originalGroups: props.indicatorGroups,
            visibleIndicatorGroups: props.indicatorGroups
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        debugger;
        if(nextProps.indicatorGroups == prevState.indicatorGroups)
            return null;
        
        return {
            originalGroups: nextProps.indicatorGroups,
            visibleIndicatorGroups: nextProps.indicatorGroups
        }
    }
    onSearch = (value) => this.setState(({
        visibleIndicatorGroups: findByPattern(this.state.originalGroups, value)
    }));

    render() {
        return (
            <div>
                <SearchLine onChange={this.onSearch} placeholder="Input indicator group name"/>
                <RemoveIndicatorGroupForm indicatorGroups={this.state.visibleIndicatorGroups} onRemoveGroups={this.props.onRemoveGroups}/>
            </div>
        );
    }
}

export default IndicatorGroupEditor;