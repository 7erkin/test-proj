import React from 'react'

import {Link} from 'react-router-dom'

import CompetenceGroupList from './CompetenceGroupList'

class RemoveCompetenceGroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.checkedGroupIds = [];
    }

    onChecked = (competenceGroupId) => {
        const index = this.checkedGroupIds.findIndex(id => id == competenceGroupId);
        index == -1 ? this.checkedGroupIds.push(competenceGroupId) : this.checkedGroupIds.splice(index, 1);
    }

    render() {
        const {
            competenceGroups,
            onRemoveGroups
        } = this.props;

        return (
            <form method="POST" action="#" onSubmit={(event) => {
                event.preventDefault();
                onRemoveGroups(this.checkedGroupIds);
            }}> 
                <div style={{display: 'flex', 'justify-content': 'space-between', marginBottom: '20px'}}>
                    <button type="button">
                        <Link to="/competencies/group-editor/add-group">Add group</Link>
                    </button>
                    <button type="submit">Remove group</button>
                </div>
                <CompetenceGroupList competenceGroups={competenceGroups} onChecked={this.onChecked}/>
            </form>
        );
    }
}

export default RemoveCompetenceGroupForm;