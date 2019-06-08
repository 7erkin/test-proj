import React, { Component } from 'react'

import { 
    updateNewIndicatorsGroupName, 
    updateNewIndicatorsGroupsDescription, 
    newIndicatorsGroupSaved 
} from '../../../../../action-creators/library-page/indicators';

import CustomSaveButton from '../../../../../components/common/custom-save-button';
import CustomCancelButton from '../../../../../components/common/custom-cancel-button';
import CustomTextAreaView from '../../../../../components/common/custom-textarea-view';
import CustomInputView from '../../../../../components/common/custom-input-view';
import IndicatorsGroupFormView from '../../../../../components/pages/library/indicators/indicators-group-form-view';

class AddIndicatorsGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    onIndicatorsGroupNameChange = name => {
        console.log(name)
        this.props.dispatch(updateNewIndicatorsGroupName(name))
    }

    onIndicatorsGroupDescriptionChange = description => {
        this.props.dispatch(updateNewIndicatorsGroupsDescription(description))
    }

    onSubmit = () => {
        const { 
            staffixService, 
            newIndicatorsGroup, 
            onSaveIndicatorsGroupClick 
        } = this.props;

        const promise = staffixService.createIndicatorsGroup(newIndicatorsGroup);
        const resolveCallbacks = [newIndicatorsGroupSaved];

        onSaveIndicatorsGroupClick(promise, resolveCallbacks);
    }

    render() {
        const {
            newIndicatorsGroup: { name, description},
            onCancel
        } = this.props;

        return (
            <IndicatorsGroupFormView 
                indicatorsGroupName={name}
                indicatorsGroupDescription={description}
                onIndicatorsGroupNameChange={this.onIndicatorsGroupNameChange}
                onIndicatorsGroupDescriptionChange={this.onIndicatorsGroupDescriptionChange}
                onSubmit={this.onSubmit}
                onCancel={onCancel}/>
        );
    }
}

export const mapStoreToAddIndicatorsGroupFormProps = ({
    libraryPage: {
        newIndicatorsGroup,
        applyingChanges
    }
}) => {
    return {
        newIndicatorsGroup,
        applyingChanges
    };
}

export default AddIndicatorsGroupForm;