import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import '../common-styles/form.css'

import CustomInputView from '../../../../common/custom-input-view';
import CustomSelectView from '../../../../common/custom-select-view';
import CustomCancelButton from '../../../../common/custom-cancel-button';
import CustomSaveButton from '../../../../common/custom-save-button';

const inputIndicatorNameStyles = {
    root: {
        marginLeft: 100,
        width: 700,
        background: 'green'
    }
}

const selectIndicatorsGroupStyles = {
    root: {
        marginLeft: 100,
        width: 700,
        background: 'green'
    }
}

const IndicatorFormView = ({
    indicatorName,
    validation,
    onIndicatorNameChange,
    indicatorsGroupId,
    onIndicatorsGroupIdChange,
    indicatorsGroups,
    onSubmit, onCancel
}) => {
    return (
        <form className="indicators-form indicators-form-common" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <div className="field">
                <CustomInputView 
                    label="Indicator name: " 
                    value={indicatorName}
                    onChange={onIndicatorNameChange}
                    err={{...validation}}
                    classes={inputIndicatorNameStyles}/>
            </div>
            <div className="field">
                <CustomSelectView 
                    label="Indicators group: " 
                    onChange={onIndicatorsGroupIdChange} 
                    items={indicatorsGroups} 
                    value={indicatorsGroupId}
                    classes={selectIndicatorsGroupStyles}/>
            </div>
            <CustomSaveButton disabled={!validation.hasErr} />
            <CustomCancelButton onClick={onCancel} />
        </form>
    );
}

IndicatorFormView.propTypes = {
    indicatorName: PropTypes.string.isRequired,
    validation: {
        hasErr: PropTypes.bool.isRequired,
        messageErr: PropTypes.string.isRequired
    }.isRequired,
    indicatorsGroups: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    indicatorsGroupId: PropTypes.number.isRequired,
    onIndicatorNameChange: PropTypes.func.isRequired,
    onIndicatorsGroupIdChange: PropTypes.func.isRequired
}

export default IndicatorFormView;