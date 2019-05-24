import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateEditIndicatorsGroupName, updateEditIndicatorsGroupDescription, editIndicatorsGroupSaved } from '../../../../../action-creators/library-page/indicators';
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
            dispatch,
            editIndicatorsGroup,
            history,
            match: {
                params: {
                    idGroup
                }
            }
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.updateIndicatorsGroup({id: idGroup, ...editIndicatorsGroup})
            .then(() => {
                dispatch(finishApplyingChanges());
                dispatch(editIndicatorsGroupSaved());
                //some actions with history - depends on how we got on this component
                history.goBack();
            }) 
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { name, description } = this.props.editIndicatorsGroup;

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

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(FormEditGroupIndicators)));