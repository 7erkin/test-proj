import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateNewIndicatorsGroupName, updateNewIndicatorsGroupsDescription } from '../../../../../action-creators/library-page/indicators';

class FormAddGroupIndicators extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        this.props.dispatch(updateNewIndicatorsGroupName(name))
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateNewIndicatorsGroupsDescription(description))
    }

    onSubmit = () => {}

    onCancel = () => {}

    render() {
        const { name, description } = this.props.newIndicatorsGroup;

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={name} onChange={this.onNameChange} />
                <textarea value={description} onChange={this.onDescriptionChange} />
                <button type="submit">Save</button>
                <button type="cancel" onClick={this.onCancel}>Cancel</button>
            </form>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        newIndicatorsGroup
    }
}) => {
    return {
        newIndicatorsGroup
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(FormAddGroupIndicators)));