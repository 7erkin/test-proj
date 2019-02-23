import React from 'react'
import PropTypes from 'prop-types'

import IndicatorGroupList from './IndicatorGroupList'

const DEFAULT_VALUE = Infinity;

const findCompetenceById = (competenceGroups, competenceGroupId, competenceId) => {
    const competenceGroupIndex = competenceGroups.findIndex(group => group.id === competenceGroupId);
    const properCompetenceGroup = competenceGroups[competenceGroupIndex];
    const competenceIndex = properCompetenceGroup.competencies.findIndex(competence => competence.id == competenceId);
    return properCompetenceGroup.competencies[competenceIndex];
}

class CompetenceEditor extends React.Component {
    constructor(props){
        super(props);

        this.isNew = this.isNewCompetence();
        this.competence = {};
        let checkedIndicators = [];
        if(!this.isNew){
            this.competence = findCompetenceById(
                props.competenceGroups, 
                props.competenceGroupId, 
                props.competenceId);
            
            checkedIndicators = this.competence.indicators;
        }

        this.state = {
            checkedIndicators
        }
    }

    // good?
    onChecked = (indicatorId, influence) => {
        const nextCheckedIndicators = this.state.checkedIndicators.slice();
        const indicatorIndex = nextCheckedIndicators.finIndex(indicator => indicator.id == indicatorId);
        if(indicatorIndex == -1) 
            nextCheckedIndicators.splice(indicatorIndex, 1);
        else 
            nextCheckedIndicators.push({
                id: indicatorId,
                influence
            });

        this.setState({
            checkedIndicators: nextCheckedIndicators
        });
    }

    isIndicatorChecked = indicatorId => {
        if(this.checkedIndicators.length === 0) return false;
        return this.checkedIndicators.some(indicator => indicator.id == indicatorId);
    };

    isNewCompetence = () => {
        return !isFinite(this.props.competenceGroupId) && !isFinite(this.props.competenceId);
    }

    render() {
        const {
            competenceGroups,
            indicatorGroups,
            competenceGroupId
        } = this.props;

        return (
            <form method="POST" action="#" onSubmit={(event) => {
                event.preventDefault();
            }}>
                <input type="text" value={this.isNew ? '' : this.competence.name} placeholder="Input competence name" />
                <select value={this.isNew ? -1 : competenceGroupId}>
                    <option value={-1}>Change group</option>
                    {competenceGroups.map(group => <option value={group.id}>{group.name}</option>)}
                </select> <br />
                <textarea value={this.isNew ? '' : this.competence.description}/>
                <IndicatorGroupList 
                    indicatorGroups={indicatorGroups} 
                    onChecked={this.onChecked} 
                    isIndicatorChecked={this.isIndicatorChecked}/>
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
                <button type="button" onClick={() => {}}>Delete</button>
            </form>
        );
    }
}

CompetenceEditor.propTypes = {
    competenceGroups: PropTypes.array,
    indicatorGroups: PropTypes.array,
    competenceGroupId: PropTypes.number,
    competenceId: PropTypes.number
}

CompetenceEditor.defaultProps = {
    competenceGroupId: DEFAULT_VALUE,
    competenceId: DEFAULT_VALUE
};

export default CompetenceEditor;

