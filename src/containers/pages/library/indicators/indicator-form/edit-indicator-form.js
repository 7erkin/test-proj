import React, { Component } from 'react'
import { updateEditIndicatorName, updateEditIndicatorIdGroup, setEditIndicator, editIndicatorSaved, resetEditIndicator } from '../../../../../action-creators/library-page/indicators/edit-indicator';
import IndicatorFormView from '../../../../../components/pages/library/indicators/indicator-form-view';

class EditIndicatorForm extends Component {
    constructor(props) {
        super(props);

        this._isSubmited = false;
    }

    componentWillUnmount = () => {
        if(!this._isSubmited)
            this.props.dispatch(resetEditIndicator());
    }

    // TODO case when one get the component by reference - indicators won't be loaded
    componentDidMount() {
        const {dispatch, indicators, match: {params: {idIndicator}}} = this.props;

        const index = indicators.findIndex(el => el.id == idIndicator);

        const {name, idGroup} =  indicators[index];

        dispatch(setEditIndicator({name, idGroup}));
    }

    onIndicatorNameChange = name => {
        this.props.dispatch(updateEditIndicatorName(name));
    }

    onIndicatorsGroupIdChange = id => {
        this.props.dispatch(updateEditIndicatorIdGroup(id))
    }

    onSubmit = async () => {
        const {
            dispatch,
            staffixService,
            editIndicator: { name: { text: name }, idGroup: { text: idGroup }},
            match: {
                params: {
                    idIndicator
                }
            },
            saveIndicatorExecutor,
            validateForm
        } = this.props;

        if(!await validateForm())
            return;

        const indicator = {
            id: idIndicator,
            name, 
            idGroup
        }

        if(!await validateForm())
            return;

        const resolvedCallbacks = [() => {dispatch(editIndicatorSaved())}];

        this._isSubmited = true;

        saveIndicatorExecutor(() => staffixService.updateIndicator(indicator), resolvedCallbacks);
    }

    render() {
        const { 
            editIndicator: {
                name: { 
                    text: name,
                    errorMessage: errorIndicatorName
                }, 
                idGroup: { 
                    text: idGroup,
                    errorMessage: errorIndicatorGroupId
                }
            }, 
            indicatorsGroups,
            onCancel,
            onIndicatorNameBlur, onIndicatorGroupIdBlur
        } = this.props;

        console.log('err1: ', errorIndicatorName)

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

export const mapStoreToEditIndicatorFormProps = ({
    libraryPage: {
        indicatorsPage: {
            common: {
                indicatorsGroups,
                indicators
            },
            editIndicator
        },
        pageManaging: {
            applyingChanges
        }
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