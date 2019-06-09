import React, { Component } from 'react'

import CompetenceFormView from '../../../../../components/pages/library/competencies/competence-form-view/competence-form-view';

import { EditCompetenceIndicatorAccordeon } from '../indicator-accordeon/indicator-accordeon';

import { 
    updateEditCompetenceName, 
    updateEditCompetenceDescription, 
    updateEditCompetenceGroupId, 
    resetEditCompetenceForm, 
    uploadEditedCompetence
} from '../../../../../action-creators/library-page/competencies';


class EditCompetenceForm extends Component {
    constructor(props) {
        super(props);
    }

    _uploadCompetenceNameToStore() {
        const {dispatch, competencies, match: {params: {idCompetence}}} = this.props;
        const index = competencies.findIndex(el => el.id == idCompetence);
        dispatch(uploadEditedCompetence(competencies[index]))
    }

    componentDidMount() {
        this._uploadCompetenceNameToStore();
    }

    onCompetenceNameChange = name => this.props.dispatch(updateEditCompetenceName(name))
    onCompetenceDescriptionChange = description => this.props.dispatch(updateEditCompetenceDescription(description))
    onCompetenceGroupIdChange = id => this.props.dispatch(updateEditCompetenceGroupId(id))

    onSubmit = () => {
        const {
            onSaveCompetenceClick, staffixService, editCompetence
        } = this.props;

        const promise = staffixService.updateCompetence(editCompetence);

        onSaveCompetenceClick(promise, resetEditCompetenceForm);
    }

    render() {
        const {
            editCompetence: {
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
                accordeon={<EditCompetenceIndicatorAccordeon />}
                onSubmit={this.onSubmit}
                onCancel={onCancel} />
        );
    }
}

const mapStoreToEditCompetenceFormProps = ({
    libraryPage: {
        editCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competencies,
        competenciesGroups
    }
}) => {
    return {
        competencies,
        editCompetence,
        loadingIndicatorsGroups,
        applyingChanges,
        competenciesGroups
    }
}

export {
    mapStoreToEditCompetenceFormProps
}

export default EditCompetenceForm;