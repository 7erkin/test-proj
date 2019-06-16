import React, { Component } from 'react'

import { 
    updateNewIndicatorsGroupName, 
    updateNewIndicatorsGroupsDescription, 
    newIndicatorsGroupSaved, 
    resetNewIndicatorsGroup
} from '../../../../../action-creators/library-page/indicators/new-indicators-group';

import IndicatorsGroupFormView from '../../../../../components/pages/library/indicators/indicators-group-form-view';
import { resetInitialLoading } from '../../../../../action-creators/library-page/page-managing';

class AddIndicatorsGroupForm extends Component {
    constructor(props) {
        super(props);

        this._isSubmited = false;
    }

    componentWillUnmount = () => {
        if(!this._isSubmited)
            this.props.dispatch(resetNewIndicatorsGroup())
    }

    onIndicatorsGroupNameChange = name => {
        this.props.dispatch(updateNewIndicatorsGroupName(name))
    }

    onIndicatorsGroupDescriptionChange = description => {
        this.props.dispatch(updateNewIndicatorsGroupsDescription(description))
    }

    onSubmit = async () => {
        const { 
            dispatch,
            staffixService, 
            newIndicatorsGroup: {
                name: { text: name },
                description: { text: description }
            }, 
            saveIndicatorsGroupExecutor,
            validateForm 
        } = this.props;

        if(!await validateForm()) 
            return;
            
        this._isSubmited = true;

        const resolvedCallbacks = [
            () => {dispatch(newIndicatorsGroupSaved())},
            () => {dispatch(resetInitialLoading())}
        ]

        saveIndicatorsGroupExecutor(() => staffixService.createIndicatorsGroup({name, description}), resolvedCallbacks)
    }

    render() {
        const {
            newIndicatorsGroup: { 
                name: { text: name,  errorMessage: errorName}, 
                description: { text: description, errorMessage: errorDescription }
            },
            onCancel,
            onIndicatorsGroupNameBlur, onIndicatorsGroupDescriptionBlur
        } = this.props;

        return (
            <IndicatorsGroupFormView 
                indicatorsGroupName={name}
                indicatorsGroupDescription={description}
                onIndicatorsGroupNameChange={this.onIndicatorsGroupNameChange}
                onIndicatorsGroupDescriptionChange={this.onIndicatorsGroupDescriptionChange}
                onSubmit={this.onSubmit}
                onCancel={onCancel}
                validation={{
                    errorIndicatorsGroupName: errorName,
                    errorIndicatorsGroupDescription: errorDescription
                }} 
                onIndicatorsGroupNameBlur={onIndicatorsGroupNameBlur}
                onIndicatorsGroupDescriptionBlur={onIndicatorsGroupDescriptionBlur} />
        );
    }
}

export const mapStoreToAddIndicatorsGroupFormProps = ({
    libraryPage: {
        indicatorsPage: {
            newIndicatorsGroup
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {
    return {
        newIndicatorsGroup,
        applyingChanges
    };
}

export default AddIndicatorsGroupForm;