import React, { Component } from 'react'

import { 
    updateEditCompetenciesGroupName, 
    updateEditCompetenciesGroupDescription, 
    editCompetenciesGroupSaved, 
    setEditCompetenciesGroup
} from '../../../../../action-creators/library-page/competencies/edit-competencies-group';

import GroupFormView from '../../../../../components/pages/library/group-form/group-form';
import { resetInitialLoading } from '../../../../../action-creators/library-page/page-managing';

class EditCompetenciesGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const {dispatch, competenciesGroups, match: {params: {idGroup}}} = this.props;
        const index = competenciesGroups.findIndex(el => el.id == idGroup);
        dispatch(setEditCompetenciesGroup(competenciesGroups[index]))
    }

    onNameChange = name => {
        console.log(name)
        this.props.dispatch(updateEditCompetenciesGroupName(name))
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateEditCompetenciesGroupDescription(description))
    }

    onSubmit = async () => {
        const { 
            dispatch, 
            staffixService, 
            editCompetenciesGroup: {
                name: { text: name },
                description: { text: description }
            }, 
            match: { params: { idGroup } },
            saveCompetenciesGroupExecutor,
            validateForm 
        } = this.props;

        if(!await validateForm()) return;

        const resolvedCallbacks = [
            () => {dispatch(editCompetenciesGroupSaved())},
            () => {dispatch(resetInitialLoading())}
        ];

        const competenciesGroup = {
            id: idGroup,
            name, 
            description
        }

        saveCompetenciesGroupExecutor(async () => await staffixService.updateCompetenciesGroup(competenciesGroup), resolvedCallbacks)
    }

    render() {
        const { 
            name: { text: name, errorMessage: errorGroupName }, 
            description: { text: description, errorMessage: errorGroupDescription }
        } = this.props.editCompetenciesGroup;

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

export const mapStoreToEditCompetenciesGroupFormProps = ({
    libraryPage: {
        competenciesPage: {
            common: {
                competenciesGroups
            },
            editCompetenciesGroup
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {
    
    return {
        editCompetenciesGroup,
        competenciesGroups,
        applyingChanges
    };
}

export default EditCompetenciesGroupForm;