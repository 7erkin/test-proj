import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateEditIndicatorName, updateEditIndicatorGroupId } from '../../../../../action-creators/library-page/indicators';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

class FormEditIndicator extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        this.props.dispatch(updateEditIndicatorName(name));
    }

    onIdGroupIndicatorsChange = id => {
        this.props.dispatch(updateEditIndicatorGroupId(id))
    }

    onSubmit = () => {
        const {
            staffixService,
            dispatch,
            editIndicator,
            history
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.updateIndicator(editIndicator)
            .then(() => {
                dispatch(finishApplyingChanges());
                //some actions with history - depends on how we got on this component
                history.goBack();
            })
    }

    onCancel = () => {}

    render() {
        const { editIndicator: { name, idGroup}, indicatorsGroups} = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={name} onChange={(evt) => this.onNameChange(evt.target.value)} />
                <select value={idGroup} onChange={(evt) => this.onIdGroupIndicatorsChange(evt.target.value)}>
                {
                    indicatorsGroups.map(({id, name}) => <option value={id}>{name}</option>)
                }
                </select>
                <button type="submit">Save</button>
                <button type="button" onClick={this.onCancel}>Cancel</button>
            </form>
        );
    }
}

const mapStoreToProps = ({
    libraryPage: {
        editIndicator,
        indicatorsGroups
    }
}) => {
    return {
        editIndicator,
        indicatorsGroups: indicatorsGroups.map(({id, name}) => {return {id, name}})
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(FormEditIndicator)));