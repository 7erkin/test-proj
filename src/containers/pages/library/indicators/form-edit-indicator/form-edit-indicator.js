import React, { Component } from 'react'
import withEffectApplyingChanges from '../../../../../hoc/with-effect-applying-changes/with-effect-applying-changes';
import withStaffixService from '../../../../../hoc/hoc-services/with-staffix-service';
import { connect } from 'react-redux';
import { updateEditIndicatorName, updateEditIndicatorIdGroup } from '../../../../../action-creators/library-page/indicators';
import { startApplyingChanges, finishApplyingChanges } from '../../../../../action-creators/library-page';

class FormEditIndicator extends Component {
    constructor(props) {
        super(props);
    }

    _isValid = name => {
        return true;
    }

    // TODO case when one get the component by reference - indicators won't be loaded
    componentDidMount() {
        const {dispatch, indicators, match: {params: {idIndicator}}} = this.props;

        const index = indicators.findIndex(el => el.id == idIndicator);

        const {name, idGroup} =  indicators[index];

        dispatch(updateEditIndicatorName(name));
        dispatch(updateEditIndicatorIdGroup(idGroup));
    }

    onNameChange = name => {
        this.props.dispatch(updateEditIndicatorName(name));
    }

    onIdGroupIndicatorsChange = id => {
        this.props.dispatch(updateEditIndicatorIdGroup(id))
    }

    onSubmit = () => {
        const {
            staffixService,
            dispatch,
            editIndicator,
            history,
            match: {params: {idIndicator}}
        } = this.props;

        dispatch(startApplyingChanges());
        staffixService.updateIndicator({id: idIndicator, ...editIndicator})
            .then(() => {
                dispatch(finishApplyingChanges());
                //some actions with history - depends on how we got on this component
                history.goBack();
            })
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { editIndicator: { name, idGroup}, indicatorsGroups} = this.props;

        return (
            <form onSubmit={evt => {
                evt.preventDefault();
                this.onSubmit();
            }}>
                <input type="text" value={name} onChange={(evt) => this.onNameChange(evt.target.value)} />
                <select value={idGroup} onChange={(evt) => this.onIdGroupIndicatorsChange(evt.target.value)}>
                <option value={''}>Choose</option>
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
        indicatorsGroups,
        indicators,
        applyingChanges
    }
}) => {
    return {
        editIndicator,
        indicators,
        applyingChanges,
        indicatorsGroups
    };
}

export default connect(mapStoreToProps)(withStaffixService(withEffectApplyingChanges(FormEditIndicator)));