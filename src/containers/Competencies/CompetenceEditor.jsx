import React from 'react'

import IndicatorGroupList from './IndicatorGroupList'

class CompetenceEditor extends React.Component {
    constructor(props){
        super(props);

        this.checkedIndicators = [];
    }

    onChecked = () => {}

    render() {
        const {
            competenceGroups,
            indicatorGroups
        } = this.props;

        return (
            <form method="POST" action="#">
                <input type="text" placeholder="Input competence name" />
                <select>
                    <option value={-1}>Change group</option>
                    {competenceGroups.map(group => <option value={group.id}>{group.name}</option>)}
                </select> <br />
                <textarea />
                <IndicatorGroupList indicatorGroups={indicatorGroups} onChecked={this.onChecked} />
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
                <button type="button">Delete</button>
            </form>
        );
    }
}

export default CompetenceEditor;

