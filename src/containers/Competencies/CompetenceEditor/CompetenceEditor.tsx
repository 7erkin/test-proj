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
import CompetenceName from './CompetenceName';
import CompetenceDescription from './CompetenceDescription';
import CompetenceGroups from './CompetenceGroups';
import { NO_VALUE } from '../../../library';

const getCompetenceById = (competenceGroups: Array<CompetenceGroup>, competenceGroupId: number, competenceId: number) => {
    const competenceGroupIndex: number = competenceGroups.findIndex(group => group.id === competenceGroupId);
    const properCompetenceGroup: CompetenceGroup = competenceGroups[competenceGroupIndex];
    const competenceIndex: number = properCompetenceGroup.competencies.findIndex(competence => competence.id == competenceId);
    return properCompetenceGroup.competencies[competenceIndex];
}
const getCompetenceGroupIdByCompetenceId = (competenceGroups: Array<CompetenceGroup>, competenceId: number) => {
    return competenceGroups.filter(group => group.competencies.some(competence => competence.id === Number(competenceId)))[0].id;
}
// not required value must be pointed out
interface Props {
    competenceId: any,
    competenceGroupId: any,
    competenceGroups: Array<CompetenceGroup>,
    indicatorGroups: Array<IndicatorGroup>,
    onUpdateCompetence: (competence: Competence, competenceGroupId: number) => void,
    onSaveCompetence: (competence: Competence, competenceGroupId: number) => void,
    onDeleteCompetence: (competenceId: number, competenceGroupId: number) => void,
    isNew: boolean
}

interface State {
    competence: Competence,
    competenceGroupId: number
}

const temporaryTransformToCompetence = (psevdoCompetence: any): Competence=> {
    return new Competence(psevdoCompetence);
}

class CompetenceEditor extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);

        let competenceGroupId = props.isNew ? NO_VALUE : getCompetenceGroupIdByCompetenceId(props.competenceGroups, props.competenceId);

        this.state = {
            competence: props.isNew ? new Competence({}) : temporaryTransformToCompetence(getCompetenceById(props.competenceGroups, competenceGroupId, props.competenceId)),
            competenceGroupId: competenceGroupId
        }
    }

    onCompetenceNameChange = (name: string) => {
        const newCompetence = new Competence(this.state.competence);
        newCompetence.name = name;
        this.setState({competence: newCompetence});
    }

    onCompetenceDescriptionChange = (description: string) => {
        const newCompetence = new Competence(this.state.competence);
        newCompetence.description = description;
        this.setState({competence: newCompetence});
    }

    onCompetenceGroupChange = (groupId: number) => {
        this.setState({competenceGroupId: groupId});
    }

    // call on add indicator or change indicator influence
    onChecked = (indicatorId: number, influence: Influence) => {
        const newCompetence = new Competence(this.state.competence);
 
        if(newCompetence.hasIndicator(indicatorId)){
            newCompetence.updateIndicatorInfluence(indicatorId, influence);
        } else {
            newCompetence.addIndicator(indicatorId, influence);
        }

        this.setState({competence: newCompetence});
    }

    onUnchecked = (indicatorId: number) => {
        const newCompetence = new Competence(this.state.competence);
        newCompetence.deleteIndicator(indicatorId);
        this.setState({competence: newCompetence});
    }

    render() {
        const {
            competenceId,
            competenceGroups,
            indicatorGroups,
            onUpdateCompetence,
            onSaveCompetence,
            onDeleteCompetence,
            isNew
        } = this.props as Props;

        return (
            <form method="POST" action="#" onSubmit={(event) => {
                event.preventDefault();
                isNew ? onSaveCompetence(this.state.competence, this.state.competenceGroupId) : onUpdateCompetence(this.state.competence, this.state.competenceGroupId);
            }}>
                <CompetenceName 
                    name={this.state.competence.name} 
                    onChange={this.onCompetenceNameChange}/>
                <CompetenceGroups 
                    groupId={this.state.competenceGroupId}
                    competenceGroups={competenceGroups}
                    onChange={this.onCompetenceGroupChange}/>
                <CompetenceDescription 
                    description={this.state.competence.description} 
                    onChange={this.onCompetenceDescriptionChange}/>
                <IndicatorGroupList 
                    competence={this.state.competence}
                    indicatorGroups={indicatorGroups} 
                    onChecked={this.onChecked} 
                    onUnchecked={this.onUnchecked}/>
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
                <button type="button" onClick={() => onDeleteCompetence(competenceId, getCompetenceGroupIdByCompetenceId(competenceGroups, competenceId))}>Delete</button>
            </form>
        );
    }
}

export default CompetenceEditor;

