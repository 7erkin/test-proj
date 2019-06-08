import React, { Component } from 'react'
import { updateEditIndicatorName, updateEditIndicatorIdGroup } from '../../../../../action-creators/library-page/indicators';
import IndicatorFormView from '../../../../../components/pages/library/indicators/indicator-form-view';

class EditIndicatorForm extends Component {
    constructor(props) {
        super(props);
    }

    // TODO case when one get the component by reference - indicators won't be loaded
    componentDidMount() {
        const {dispatch, indicators, match: {params: {idIndicator}}} = this.props;

        const index = indicators.findIndex(el => el.id == idIndicator);

        const {name, idGroup} =  indicators[index];

        dispatch(updateEditIndicatorName(name));
        dispatch(updateEditIndicatorIdGroup(idGroup));
    }

    onIndicatorNameChange = name => {
        this.props.dispatch(updateEditIndicatorName(name));
    }

    onIndicatorsGroupsIdChange = id => {
        this.props.dispatch(updateEditIndicatorIdGroup(id))
    }

    onSubmit = () => {
        const {
            staffixService,
            editIndicator,
            match: {
                params: {
                    idIndicator
                }
            },
            onSaveIndicatorClick
        } = this.props;

        const promise = staffixService.updateIndicator({
            id: idIndicator, 
            ...editIndicator
        });

        onSaveIndicatorClick(promise);
    }

    render() {
        const { 
            editIndicator: { 
                name, idGroup
            }, 
            indicatorsGroups,
            onCancel
        } = this.props;

        return (
            <IndicatorFormView 
                indicatorName={name}
                indicatorsGroups={indicatorsGroups}
                indicatorsGroupId={idGroup}
                onIndicatorNameChange={this.onIndicatorNameChange}
                onIndicatorsGroupIdChange={this.onIndicatorsGroupIdChange}
                onSubmit={this.onSubmit}
                onCancel={onCancel}
                validation={{
                    hasErr: false,
                    messageErr: ''
                }}
            />
        );
    }
}

export const mapStoreToEditIndicatorFormProps = ({
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

export default EditIndicatorForm;