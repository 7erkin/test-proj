import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateEditCompetenciesGroupName, updateEditCompetenciesGroupDescription, editCompetenciesGroupSaved } from '../../../../../action-creators/library-page/competencies';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

class EditCompetenciesGroupForm extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        this.props.dispatch(updateEditCompetenciesGroupName(name));
    }

    onDescriptionChange = description => {
        this.props.dispatch(updateEditCompetenciesGroupDescription(description));
    }

    componentDidMount() {
        const {match: {params: {idGroup}}, dispatch, competenciesGroups} = this.props;

        const index = competenciesGroups.findIndex(({id}) => id == idGroup);

        const {name, description} = competenciesGroups[index];

        dispatch(updateEditCompetenciesGroupName(name));
        dispatch(updateEditCompetenciesGroupDescription(description));
    } 

    onSubmit = () => {
        const {
            staffixService,
            dispatch,
            editCompetenciesGroup,
            history,
            match: {
                params: {
                    idGroup
                }
            }
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.updateCompetenciesGroup({id: idGroup, ...editCompetenciesGroup})
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(editCompetenciesGroupSaved());
                //some actions with history - depends on how we got on this component
                history.goBack();
            }) 
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { name, description } = this.props.editCompetenciesGroup;

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
        editCompetenciesGroup,
        competenciesGroups,
        applyingChanges
    }
}) => {
    
    return {
        editCompetenciesGroup,
        competenciesGroups,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(EditCompetenciesGroupForm)));