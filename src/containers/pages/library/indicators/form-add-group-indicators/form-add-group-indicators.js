import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateNewIndicatorsGroupName, updateNewIndicatorsGroupsDescription, newIndicatorsGroupSaved } from '../../../../../action-creators/library-page/indicators';
import { finishApplyingChanges, startApplyingChanges } from '../../../../../action-creators/library-page';

class FormAddGroupIndicators extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        console.log(name)
        this.props.dispatch(updateNewIndicatorsGroupName(name))
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateNewIndicatorsGroupsDescription(description))
    }

    onSubmit = () => {
        const { dispatch, staffixService, newIndicatorsGroup } = this.props;

        dispatch(startApplyingChanges());
        staffixService.createIndicatorsGroup(newIndicatorsGroup)
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(newIndicatorsGroupSaved());
            })
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { name, description } = this.props.newIndicatorsGroup;

        return (
            <form onSubmit={evt => {
                evt.preventDefault();
                this.onSubmit();
            }}>
                <input type="text" value={name} onChange={evt => this.onNameChange(evt.target.value)} />
                <textarea value={description} onChange={evt => this.onDescriptionChange(evt.target.value)} />
                <button type="submit">Save</button>
                <button type="button" onClick={this.onCancel}>Cancel</button>
            </form>
        );
    }
}

const mapStoreToProps = ({
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

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(FormAddGroupIndicators)));