import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateNewCompetenciesGroupName, updateNewCompetenciesGroupsDescription, newCompetenciesGroupSaved } from '../../../../../action-creators/library-page/competencies';
import { finishApplyingChanges, startApplyingChanges } from '../../../../../action-creators/library-page';

class AddCompetenciesGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        console.log(name)
        this.props.dispatch(updateNewCompetenciesGroupName(name))
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateNewCompetenciesGroupsDescription(description))
    }

    onSubmit = () => {
        const { dispatch, staffixService, newCompetenciesGroup } = this.props;

        dispatch(startApplyingChanges());
        staffixService.createCompetenciesGroup(newCompetenciesGroup)
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(newCompetenciesGroupSaved());
            })
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { name, description } = this.props.newCompetenciesGroup;

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
        newCompetenciesGroup,
        applyingChanges
    }
}) => {
    return {
        newCompetenciesGroup,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(AddCompetenciesGroupForm)));