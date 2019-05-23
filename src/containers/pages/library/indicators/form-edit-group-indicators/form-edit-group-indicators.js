import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateEditIndicatorsGroupName, updateEditIndicatorsGroupDescription } from '../../../../../action-creators/library-page/indicators';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

class FormEditGroupIndicators extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        this.props.dispatch(updateEditIndicatorsGroupName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateEditIndicatorsGroupDescription(description));
    }

    onSubmit = () => {
        const {
            staffixService,
            dispatch,
            editIndicatorsGroup,
            history
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.updateIndicatorsGroup(editIndicatorsGroup)
            .then(() => {
                dispatch(finishApplyingChanges());
                //some actions with history - depends on how we got on this component
                history.goBack();
            }) 
    }

    onCancel = () => {}

    render() {
        const { name, description } = this.props.editIndicatorsGroup;

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={name} onChange={this.onNameChange} />
                <textarea value={description} onChange={this.onDescriptionChange} />
                <button type="submit">Save</button>
                <button type="button" onClick={this.onDescriptionChange}>Cancel</button>
            </form>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        editIndicatorsGroup
    }
}) => {
    return {
        editIndicatorsGroup
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(FormEditGroupIndicators)));