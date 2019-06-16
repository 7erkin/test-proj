import React, { Component } from 'react'

import CompetenceFormView from '../../../../../components/pages/library/competencies/competence-form-view/competence-form-view';

import { AddCopmetenceIndicatorAccordeon } from '../indicator-accordeon/indicator-accordeon';

import { updateNewCompetenceName, updateNewCompetenceDescription, updateNewCompetenceGroupId, resetNewCompetence, newCompetenceSaved } from '../../../../../action-creators/library-page/competencies/new-competence'

class AddCompetenceForm extends Component {
    constructor(props) {
        super(props);

        this._isSubmit = false;
    }

    componentWillUnmount = () => {
        if(!this._isSubmit)
            this.props.dispatch(resetNewCompetence())
    }

    onCompetenceNameChange = name => this.props.dispatch(updateNewCompetenceName(name))
    onCompetenceDescriptionChange = description => this.props.dispatch(updateNewCompetenceDescription(description))
    onCompetenceGroupIdChange = id => this.props.dispatch(updateNewCompetenceGroupId(id))

    onSubmit = async () => {
        const {
            dispatch,
            staffixService, newCompetence: { name: { text: name }, description: { text: description }, idGroup: { text: idGroup }, indicators},
            validateForm,
            saveCompetenceExecutor
        } = this.props;

        if(!await validateForm()) return;

        this._isSubmit = true;

        const resolvedCallbacks = [
            () => {dispatch(newCompetenceSaved())}
        ]

        const competence = {
            name,
            description,
            idGroup,
            indicators
        }

        saveCompetenceExecutor(() => staffixService.createCompetence(competence), resolvedCallbacks);
    }

    render() {
        const {
            newCompetence: {
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
                accordeon={<AddCopmetenceIndicatorAccordeon />}
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

export const mapStoreToAddCompetenceFormProps = ({
    libraryPage: {
        indicatorsPage: {
            loading: {
                loadingIndicatorsGroups
            }
        },
        competenciesPage: {
            common: {
                competenciesGroups
            },
            newCompetence
        },
        pageManaging: {
            applyingChanges
        }
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