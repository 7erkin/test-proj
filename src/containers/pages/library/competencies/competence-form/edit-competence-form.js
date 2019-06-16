import React, { Component } from 'react'

import CompetenceFormView from '../../../../../components/pages/library/competencies/competence-form-view/competence-form-view';

import { EditCompetenceIndicatorAccordeon } from '../indicator-accordeon/indicator-accordeon';

import { updateEditCompetenceName, updateEditCompetenceDescription, updateEditCompetenceGroupId, setEditCompetence, resetEditCompetence, editCompetenceSaved } from '../../../../../action-creators/library-page/competencies/edit-competence'


class EditCompetenceForm extends Component {
    constructor(props) {
        super(props);

        this._isSubmit = false
    }

    _uploadCompetenceNameToStore() {
        const {dispatch, competencies, match: {params: {idCompetence}}} = this.props;
        const index = competencies.findIndex(el => el.id == idCompetence);
        dispatch(setEditCompetence(competencies[index]))
    }

    componentDidMount() {
        this._uploadCompetenceNameToStore();
    }

    componentWillUnmount = () => {
        if(!this._isSubmit)
            this.props.dispatch(resetEditCompetence())
    }

    onCompetenceNameChange = name => this.props.dispatch(updateEditCompetenceName(name))
    onCompetenceDescriptionChange = description => this.props.dispatch(updateEditCompetenceDescription(description))
    onCompetenceGroupIdChange = id => this.props.dispatch(updateEditCompetenceGroupId(id))

    onSubmit = async () => {
        const {
            dispatch,
            staffixService, editCompetence: { name: { text: name }, description: { text: description }, idGroup: { text: idGroup }, indicators},
            match: { params: { idCompetence }},
            saveCompetenceExecutor,
            validateForm
        } = this.props;

        if(!await validateForm()) return;

        this._isSubmit = true;

        const resolvedCallbacks = [
            () => {dispatch(editCompetenceSaved())}
        ]

        const competence = {
            id: idCompetence,
            name,
            description,
            idGroup,
            indicators
        }

        saveCompetenceExecutor(() => staffixService.updateCompetence(competence), resolvedCallbacks);
    }

    render() {
        const {
            editCompetence: {
                name: {
                    text: name,
                    errorMessage: errorCompetenceName
                },
                description: {
                    text: description,
                    errorMessage: errorCompetenceDescription
                },
                idGroup: {
                    text: idGroup,
                    errorMessage: errorCompetenceGroupId
                }
            },
            competenciesGroups,
            onCancel,
            onCompetenceNameBlur,
            onCompetenceDescriptionBlur,
            onCompetenceGroupIdBlur
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
                onCancel={onCancel}
                validation={{
                    errorCompetenceDescription,
                    errorCompetenceGroupId,
                    errorCompetenceName
                }} 
                onCompetenceNameBlur={onCompetenceNameBlur}
                onCompetenceDescriptionBlur={onCompetenceDescriptionBlur}
                onCompetenceGroupIdBlur={onCompetenceGroupIdBlur} />
        );
    }
}

const mapStoreToEditCompetenceFormProps = ({
    libraryPage: {
        indicatorsPage: {
            loading: {
                loadingIndicatorsGroups
            }
        },
        competenciesPage: {
            common: {
                competencies,
                competenciesGroups
            },
            editCompetence
        },
        pageManaging: {
            applyingChanges
        }
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