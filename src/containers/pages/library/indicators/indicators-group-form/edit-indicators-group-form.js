import React, { Component } from 'react'

import { 
    updateEditIndicatorsGroupName, 
    updateEditIndicatorsGroupDescription, 
    editIndicatorsGroupSaved, 
    setEditIndicatorsGroup,
    resetEditIndicatorsGroup
} from '../../../../../action-creators/library-page/indicators/edit-indicators-group';
import IndicatorsGroupFormView from '../../../../../components/pages/library/indicators/indicators-group-form-view';
import { resetInitialLoading } from '../../../../../action-creators/library-page/page-managing';


class EditIndicatorsGroupForm extends Component {
    constructor(props) {
        super(props);

        this._isSubmited = false;
    }

    componentWillUnmount = () => {
        if(!this._isSubmited)
            this.props.dispatch(resetEditIndicatorsGroup())
    }

    onIndicatorsGroupNameChange = name => {
        if(!this._isSubmited)
            this.props.dispatch(updateEditIndicatorsGroupName(name));
    }

    onIndicatorsGroupDescriptionChange = description => {
        this.props.dispatch(updateEditIndicatorsGroupDescription(description));
    }

    componentDidMount() {
        const {match: {params: {idGroup}}, dispatch, indicatorsGroups} = this.props;

        const index = indicatorsGroups.findIndex(({id}) => id == idGroup);

        const {name, description} = indicatorsGroups[index];

        dispatch(setEditIndicatorsGroup({name, description}));
    } 

    onSubmit = async () => {
        const {
            dispatch,
            staffixService,
            editIndicatorsGroup: { name: { text: name }, description: { text: description }},
            match: {
                params: {
                    idGroup
                }
            },
            saveIndicatorsGroupExecutor,
            validateForm
        } = this.props;

        if(!await validateForm()) return;

        const indicatorsGroup = {
            id: idGroup,
            name,
            description
        }

        this._isSubmited = true;
        
        const resolvedCallbacks = [
            () => {dispatch(editIndicatorsGroupSaved())},
            () => {dispatch(resetInitialLoading())}
        ]

        saveIndicatorsGroupExecutor(() => staffixService.updateIndicatorsGroup(indicatorsGroup), resolvedCallbacks)
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const {
            editIndicatorsGroup: {
                name: { text: name, errorMessage: errorName }, 
                description: { text: description, errorMessage: errorDescription }
            },
            onCancel,
            onIndicatorsGroupNameBlur,
            onIndicatorsGroupDescriptionBlur
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

export const mapStoreToEditIndicatorsGroupFormProps = ({
    libraryPage: {
        indicatorsPage: {
            common: {
                indicatorsGroups
            },
            editIndicatorsGroup
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {
    
    return {
        editIndicatorsGroup,
        indicatorsGroups,
        applyingChanges
    };
}

export default EditIndicatorsGroupForm;