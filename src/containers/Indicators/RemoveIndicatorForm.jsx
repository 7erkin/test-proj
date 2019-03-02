import React from 'react'

import {Link} from 'react-router-dom'

import IndicatorList from './IndicatorList'

class RemoveIndicatorForm extends React.Component {
    constructor(props) {
        super(props);

        this.checkedIndicatorIds = [];
    }

    onChecked = (indicatorGroupId) => {
        const index = this.checkedIndicatorIds.findIndex(id => id == indicatorGroupId);
        index == -1 ? this.checkedIndicatorIds.push(indicatorGroupId) : this.checkedIndicatorIds.splice(index, 1);
    }

    render() {
        const {
            indicators,
            onRemoveIndicators
        } = this.props;
        debugger;
        this.checkedIndicatorIds = [];
        return (
            <form method="POST" action="#" onSubmit={(event) => {
                    event.preventDefault();
                    if(!this.checkedIndicatorIds.length) return;
                    onRemoveIndicators(this.checkedIndicatorIds);
                }}> 
                <div style={{display: 'flex', 'justify-content': 'space-between', marginBottom: '20px'}}>
                    <button type="button">
                        <Link to="/indicators/addindicator">Add indicator</Link>
                    </button>
                    <button type="submit">Remove indicator</button>
                </div>
                <IndicatorList indicators={indicators} onChecked={this.onChecked} />
            </form>
        );
    }
}

export default RemoveIndicatorForm;