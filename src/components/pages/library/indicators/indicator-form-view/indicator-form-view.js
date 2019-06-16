import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import '../common-styles/form.css'

import CustomInputView from '../../../../common/custom-input-view';
import CustomSelectView from '../../../../common/custom-select-view';
import CustomCancelButton from '../../../../common/custom-cancel-button';
import CustomSaveButton from '../../../../common/custom-save-button';

const IndicatorFormView = ({
    indicatorName,
    validation: {
        errorIndicatorName,
        errorIndicatorGroupId
    },
    onIndicatorNameChange,
    indicatorsGroupId,
    onIndicatorsGroupIdChange,
    indicatorsGroups,
    onSubmit, onCancel,
    onIndicatorNameBlur,
    onIndicatorGroupIdBlur
}) => {
    return (
        <form className="indicator-form indicators-form-common" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <div className="horizontal-wrapper">
                <div className="field">
                    <CustomInputView 
                        label="Название индикатора " 
                        value={indicatorName}
                        onChange={onIndicatorNameChange}
                        err={errorIndicatorName} 
                        onBlur={onIndicatorNameBlur} />
                </div>
                <div className="field">
                    <CustomSelectView 
                        label="Группа индикатора " 
                        onChange={onIndicatorsGroupIdChange} 
                        items={indicatorsGroups} 
                        value={indicatorsGroupId}
                        err={errorIndicatorGroupId}
                        onBlur={onIndicatorGroupIdBlur} />
                </div>
            </div>
            <div className="indicators-form-button">
                <CustomSaveButton />
                <CustomCancelButton onClick={onCancel} />
            </div>
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