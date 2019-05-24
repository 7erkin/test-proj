import React, { Component } from 'react'
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import {connect} from 'react-redux'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import { updateNewIndicatorName, updateNewIndicatorIdGroup } from '../../../../../action-creators/library-page/indicators';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

class FormAddIndicator extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    onNameChange = name => {
        this.props.dispatch(updateNewIndicatorName(name));
    }

    onIdGroupIndicatorsChange = id => {
        this.props.dispatch(updateNewIndicatorIdGroup(id));
    }

    onSubmit = () => {
        const {
            staffixService,
            dispatch,
            newIndicator,
            history
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.createIndicator(newIndicator)
            .then(() => {
                dispatch(finishApplyingChanges());
                //some actions with history - depends on how we got on this component
                history.goBack();
            })
    }

    onCancel = () => {
        //some actions with history - depends on how we got on this component
        this.props.history.goBack();
    }

    render() {
        const {
            indicatorsGroups,
            newIndicator: {
                name, idGroup
            }
        } = this.props;

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
        indicatorsGroups,
        newIndicator,
        applyingChanges
    }
}) => {
    
    return {
        indicatorsGroups: indicatorsGroups.map(({id, name}) => {return {id, name}}),
        newIndicator,
        applyingChanges
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(FormAddIndicator)));