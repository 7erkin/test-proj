import React, { Component } from 'react'

import { updateNewCompetenciesGroupName, updateNewCompetenciesGroupsDescription, newCompetenciesGroupSaved } from '../../../../../action-creators/library-page/competencies/new-competencies-group';

import GroupFormView from '../../../../../components/pages/library/group-form/group-form';
import { resetInitialLoading } from '../../../../../action-creators/library-page/page-managing';

class AddCompetenciesGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    onNameChange = name => {
        console.log(name)
        this.props.dispatch(updateNewCompetenciesGroupName(name))
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateNewCompetenciesGroupsDescription(description))
    }

    onSubmit = async () => {
        const { 
            dispatch, 
            staffixService, 
            newCompetenciesGroup: {
                name: { text: name },
                description: { text: description }
            }, 
            saveCompetenciesGroupExecutor,
            validateForm 
        } = this.props;

        if(!await validateForm()) return;

        const resolvedCallbacks = [
            () => {dispatch(newCompetenciesGroupSaved())},
            () => {dispatch(resetInitialLoading())}
        ];

        saveCompetenciesGroupExecutor(async () => await staffixService.createCompetenciesGroup({ name, description }), resolvedCallbacks)
    }

    render() {
        const { 
            name: { text: name, errorMessage: errorGroupName }, 
            description: { text: description, errorMessage: errorGroupDescription}
        } = this.props.newCompetenciesGroup;

        const {
            onCancel,
            onCompetenciesGroupNameBlur,
            onCompetenciesGroupDescriptionBlur
        } = this.props;

        return (
            <GroupFormView 
                groupName={name}
                groupDescription={description}
                onSubmit={this.onSubmit}
                onCancel={onCancel}
                onGroupNameBlur={onCompetenciesGroupNameBlur}
                onGroupDescriptionBlur={onCompetenciesGroupDescriptionBlur}
                onGroupNameChange={this.onNameChange}
                onGroupDescriptionChange={this.onDescriptionChange}
                validation={{
                    errorGroupName,
                    errorGroupDescription
                }} />
        );
    }
}

export const mapStoreToAddCompetenciesGroupFormProps = ({
    libraryPage: {
        competenciesPage: {
            newCompetenciesGroup
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {
    return {
        newCompetenciesGroup,
        applyingChanges
    };
}

export default AddCompetenciesGroupForm;