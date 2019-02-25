import React from 'react'

import IndicatorGroupList from './IndicatorGroupList'

import {
    Indicator,
    Competence,
    CompetenceGroup,
    Influence
} from '../types'

import {
    IndicatorGroup
} from '../../Indicators/types'

const findCompetenceById = (competenceGroups: Array<CompetenceGroup>, competenceGroupId: number, competenceId: number) => {
    const competenceGroupIndex: number = competenceGroups.findIndex(group => group.id === competenceGroupId);
    const properCompetenceGroup: CompetenceGroup = competenceGroups[competenceGroupIndex];
    const competenceIndex: number = properCompetenceGroup.competencies.findIndex(competence => competence.id == competenceId);
    return properCompetenceGroup.competencies[competenceIndex];
}

// not required value must be pointed out
interface Props {
    competenceId: any,
    competenceGroupId: any,
    competenceGroups: Array<CompetenceGroup>,
    indicatorGroups: Array<IndicatorGroup>,
    onUpdateCompetence: (competence: Competence) => void,
    onSaveCompetence: (competence: Competence) => void,
    onDeleteCompetence: (competenceId: number) => void,
    isNew: boolean
}

interface State {
    competence: Competence,
    competenceGroupId: number
}

const temporaryTransformToCompetence = (psevdoCompetence: any): Competence=> {
    return new Competence(psevdoCompetence);
}

const NO_GROUP: number = 0;

class CompetenceEditor extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);


        this.state = {
            competence: props.isNew ? new Competence({}) : temporaryTransformToCompetence(findCompetenceById(props.competenceGroups, props.competenceGroupId, props.competenceId)),
            competenceGroupId: props.isNew ? NO_GROUP : props.competenceGroupId
        }
    }

    // call on add indicator or change indicator influence
    onChecked = (indicatorId: number, influence: Influence) => {
        const competence = (this.state as State).competence;
 
        if(competence.hasIndicator(indicatorId)){
            competence.updateIndicatorInfluence(indicatorId, influence);
            return;
        }

        competence.addIndicator(indicatorId, influence);
    }

    onUnchecked = (indicatorId: number) => {
        const competence = (this.state as State).competence as Competence;
        competence.deleteIndicator(indicatorId);
    }

    render() {
        const {
            competenceId,
            competenceGroups,
            indicatorGroups,
            competenceGroupId,
            onUpdateCompetence,
            onSaveCompetence,
            onDeleteCompetence,
            isNew
        } = this.props as Props;

        debugger;
        return (
            <form method="POST" action="#" onSubmit={(event) => {
                event.preventDefault();
                isNew ? onSaveCompetence((this.state as State).competence) : onUpdateCompetence((this.state as State).competence);
            }}>
                <input onChange={event => {}} type="text" value={(this.state as State).competence.name} placeholder="Input competence name" />
                <select onChange={event => {}} value={(this.state as State).competenceGroupId}>
                    <option value={NO_GROUP}>Change group</option>
                    {competenceGroups.map(group => <option value={group.id}>{group.name}</option>)}
                </select> <br />
                <textarea onChange={event => {}} value={(this.state as State).competence.description}/>
                <IndicatorGroupList 
                    competence={this.state.competence}
                    indicatorGroups={indicatorGroups} 
                    onChecked={this.onChecked} 
                    onUnchecked={this.onUnchecked}/>
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
                <button type="button" onClick={() => onDeleteCompetence(competenceId)}>Delete</button>
            </form>
        );
    }
}

export default CompetenceEditor;

