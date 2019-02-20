import React from 'react'

import {Link} from 'react-router-dom'

import IndicatorGroupList from './IndicatorGroupList'

class RemoveIndicatorGroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.checkedGroupIds = [];
    }

    onChecked = (indicatorGroupId) => {
        const index = this.checkedGroupIds.findIndex(id => id == indicatorGroupId);
        index == -1 ? this.checkedGroupIds.push(indicatorGroupId) : this.checkedGroupIds.splice(index, 1);
    }

    render() {
        const {
            indicatorGroups,
            onRemoveGroups
        } = this.props;

        return (
            <form method="POST" action="#" onSubmit={(event) => {
                event.preventDefault();
                console.log(this.props);
                onRemoveGroups(this.checkedGroupIds);
            }}> 
                <div style={{display: 'flex', 'justify-content': 'space-between', marginBottom: '20px'}}>
                    <button type="button">
                        <Link to="/indicators/addgroup">Add group</Link>
                    </button>
                    <button type="submit">Remove group</button>
                </div>
                <IndicatorGroupList indicatorGroups={indicatorGroups} onChecked={this.onChecked}/>
            </form>
        );
    }
}

export default RemoveIndicatorGroupForm;