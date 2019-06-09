import React, { Component } from 'react'

import CompetenceFormView from '../../../../../components/pages/library/competencies/competence-form-view/competence-form-view';

import { AddCopmetenceIndicatorAccordeon } from '../indicator-accordeon/indicator-accordeon';

import { 
    updateNewCompetenceName, 
    updateNewCompetenceDescription, 
    updateNewCompetenceGroupId, 
    resetNewCompetenceForm 
} from '../../../../../action-creators/library-page/competencies';

class AddCompetenceForm extends Component {
    constructor(props) {
        super(props);
    }

    onCompetenceNameChange = name => this.props.dispatch(updateNewCompetenceName(name))
    onCompetenceDescriptionChange = description => this.props.dispatch(updateNewCompetenceDescription(description))
    onCompetenceGroupIdChange = id => this.props.dispatch(updateNewCompetenceGroupId(id))

    onSubmit = () => {
        const {
            onSaveCompetenceClick, staffixService, newCompetence
        } = this.props;

        const promise = staffixService.createCompetence(newCompetence);

        onSaveCompetenceClick(promise, resetNewCompetenceForm);
    }

    render() {
        const {
            newCompetence: {
                name,
                description,
                idGroup
            },
            competenciesGroups,
            onCancel
        } = this.props;

        return (
            <CompetenceFormView 
                competenceName={name}
                competenceDescription={description}
                competenciesGroupId={idGroup}
                competenciesGroups={competenciesGroups}
                onCompetenceNameChange={this.onCompetenceNameChange}
                onCompetenceDescriptionChange={this.onCompetenceDescriptionChange}
                onCompetenceGroupIdChange={this.onCompetenceGroupIdChange} 
                accordeon={<AddCopmetenceIndicatorAccordeon />}
                onSubmit={this.onSubmit}
                onCancel={onCancel} />
        );
    }
}

export const mapStoreToAddCompetenceFormProps = ({
    libraryPage: {
        newCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups
    }
}) => {
    return {
        newCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups
    }
}

export default AddCompetenceForm;