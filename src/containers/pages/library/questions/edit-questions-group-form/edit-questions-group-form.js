import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';
import { updateEditQuestionsGroupName, updateEditQuestionsGroupDescription, editQuestionsGroupSaved } from '../../../../../action-creators/library-page/questions';

class EditQuestionsGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        this.props.dispatch(updateEditQuestionsGroupName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateEditQuestionsGroupDescription(description));
    }

    componentDidMount() {
        const {match: {params: {idGroup}}, dispatch, questionsGroups} = this.props;

        const index = questionsGroups.findIndex(({id}) => id == idGroup);

        const {name, description} = questionsGroups[index];

        dispatch(updateEditQuestionsGroupName(name));
        dispatch(updateEditQuestionsGroupDescription(description));
    } 

    onSubmit = () => {
        const {
            staffixService,
            dispatch,
            editQuestionsGroup,
            history,
            match: {
                params: {
                    idGroup
                }
            }
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.updateQuestionsGroup({id: idGroup, ...editQuestionsGroup})
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(editQuestionsGroupSaved());
                //some actions with history - depends on how we got on this component
                history.goBack();
            }) 
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { name, description } = this.props.editQuestionsGroup;

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
        editQuestionsGroup,
        questionsGroups,
        applyingChanges
    }
}) => {
    
    return {
        editQuestionsGroup,
        questionsGroups,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(EditQuestionsGroupForm)));