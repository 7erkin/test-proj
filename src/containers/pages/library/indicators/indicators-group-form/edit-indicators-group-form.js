import React, { Component } from 'react'

import { 
    updateEditIndicatorsGroupName, 
    updateEditIndicatorsGroupDescription, 
    editIndicatorsGroupSaved 
} from '../../../../../action-creators/library-page/indicators';
import IndicatorsGroupFormView from '../../../../../components/pages/library/indicators/indicators-group-form-view';

class EditIndicatorsGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    onIndicatorsGroupNameChange = name => {
        this.props.dispatch(updateEditIndicatorsGroupName(name));
    }

    onIndicatorsGroupDescriptionChange = description => {
        this.props.dispatch(updateEditIndicatorsGroupDescription(description));
    }

    componentDidMount() {
        const {match: {params: {idGroup}}, dispatch, indicatorsGroups} = this.props;

        const index = indicatorsGroups.findIndex(({id}) => id == idGroup);

        const {name, description} = indicatorsGroups[index];

        dispatch(updateEditIndicatorsGroupName(name));
        dispatch(updateEditIndicatorsGroupDescription(description));
    } 

    onSubmit = () => {
        const {
            staffixService,
            editIndicatorsGroup,
            match: {
                params: {
                    idGroup
                }
            },
            onSaveIndicatorsGroupClick
        } = this.props;

        const promise = staffixService.updateIndicatorsGroup({id: idGroup, ...editIndicatorsGroup})
        const resolveCallbacks = [editIndicatorsGroupSaved];

        onSaveIndicatorsGroupClick(promise, resolveCallbacks);
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const {
            editIndicatorsGroup: {name, description},
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

export const mapStoreToEditIndicatorsGroupFormProps = ({
    libraryPage: {
        editIndicatorsGroup,
        indicatorsGroups,
        applyingChanges
    }
}) => {
    
    return {
        editIndicatorsGroup,
        indicatorsGroups,
        applyingChanges
    };
}

export default EditIndicatorsGroupForm;