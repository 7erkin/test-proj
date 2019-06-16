import React, { Component } from 'react'
import { 
    updateNewIndicatorName, 
    updateNewIndicatorIdGroup, 
    resetNewIndicator,
    newIndicatorSaved
} from '../../../../../action-creators/library-page/indicators/new-indicator';
import IndicatorFormView from '../../../../../components/pages/library/indicators/indicator-form-view';

class AddIndicatorForm extends Component {
    constructor(props) {
        super(props);

        this._isSubmited = false;
    }

    componentWillUnmount = () => {
        if(!this._isSubmited)
            this.props.dispatch(resetNewIndicator());
    }

    onIndicatorNameChange = name => {
        this.props.dispatch(updateNewIndicatorName(name));
    }

    onIndicatorsGroupIdChange = id => {
        this.props.dispatch(updateNewIndicatorIdGroup(id));
    }

    onSubmit = async () => {
        const {
            dispatch,
            staffixService,
            newIndicator: {
                name: { text: name },
                idGroup: { text: idGroup }
            },
            saveIndicatorExecutor,
            validateForm
        } = this.props;

        if(!await validateForm())
            return;

        const resolvedCallbacks = [() => {dispatch(newIndicatorSaved())}];

        this._isSubmited = true;

        saveIndicatorExecutor(() =>staffixService.createIndicator({name, idGroup}), resolvedCallbacks);
    }

    render() {
        const {
            indicatorsGroups,
            newIndicator: {
                name: { 
                    text: name,
                    errorMessage: errorIndicatorName
                }, 
                idGroup: { 
                    text: idGroup,
                    errorMessage: errorIndicatorGroupId
                }
            },
            onCancel,
            onIndicatorNameBlur, onIndicatorGroupIdBlur
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
                    errorIndicatorName,
                    errorIndicatorGroupId
                }}
                onIndicatorNameBlur={onIndicatorNameBlur}
                onIndicatorGroupIdBlur={onIndicatorGroupIdBlur}
            />
        );
    }
}

export const mapStoreToAddIndicatorFormProps = ({
    libraryPage: {
        indicatorsPage: {
            common: {
                indicatorsGroups
            },
            newIndicator
        },
        pageManaging: {
            applyingChanges
        }
    }
}) => {
    
    return {
        indicatorsGroups: indicatorsGroups.map(({id, name}) => {return {id, name}}),
        newIndicator,
        applyingChanges
    };
}

export default AddIndicatorForm;