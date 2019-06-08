import React, { Component } from 'react'
import { 
    updateNewIndicatorName, 
    updateNewIndicatorIdGroup 
} from '../../../../../action-creators/library-page/indicators';
import IndicatorFormView from '../../../../../components/pages/library/indicators/indicator-form-view';

class AddIndicatorForm extends Component {
    constructor(props) {
        super(props);
    }

    onIndicatorNameChange = name => {
        this.props.dispatch(updateNewIndicatorName(name));
    }

    onIndicatorsGroupIdChange = id => {
        this.props.dispatch(updateNewIndicatorIdGroup(id));
    }

    onSubmit = () => {
        const {
            staffixService,
            newIndicator,
            onSaveIndicatorClick
        } = this.props;

        const promise = staffixService.createIndicator(newIndicator)

        onSaveIndicatorClick(promise);
    }

    render() {
        const {
            indicatorsGroups,
            newIndicator: {
                name, idGroup
            },
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
                    messsageErr: ''
                }}
            />
        );
    }
}

export const mapStoreToAddIndicatorFormProps = ({
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

export default AddIndicatorForm;