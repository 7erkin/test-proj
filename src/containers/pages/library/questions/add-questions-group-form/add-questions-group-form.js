import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { finishApplyingChanges, startApplyingChanges } from '../../../../../action-creators/library-page';
import { updateNewQuestionsGroupDescription, updateNewQuestionsGroupName, newQuestionsGroupSaved } from '../../../../../action-creators/library-page/questions';

class AddQuestionsGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        console.log(name)
        this.props.dispatch(updateNewQuestionsGroupName(name))
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateNewQuestionsGroupDescription(description))
    }

    onSubmit = () => {
        const { dispatch, staffixService, newQuestionsGroup, history } = this.props;

        dispatch(startApplyingChanges());
        staffixService.createQuestionsGroup(newQuestionsGroup)
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(newQuestionsGroupSaved());
                history.push('/library/questions-groups/edit');
            })
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { name, description } = this.props.newQuestionsGroup;

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
        newQuestionsGroup,
        applyingChanges
    }
}) => {
    return {
        newQuestionsGroup,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(AddQuestionsGroupForm)));