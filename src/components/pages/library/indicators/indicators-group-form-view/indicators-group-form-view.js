import React from 'react'
import CustomInputView from '../../../../common/custom-input-view';
import CustomTextAreaView from '../../../../common/custom-textarea-view';
import CustomSaveButton from '../../../../common/custom-save-button';
import CustomCancelButton from '../../../../common/custom-cancel-button';

import './style.css'
import '../common-styles/form.css'

const IndicatorsGroupFormView = ({
    indicatorsGroupName,
    onIndicatorsGroupNameChange,
    indicatorsGroupDescription,
    onIndicatorsGroupDescriptionChange,
    onSubmit, onCancel, 
    //validation
}) => {

    return (
        <form className="indicators-group-form indicators-form-common" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <div className="field">
                <CustomInputView
                    label="Название групы: " 
                    value={indicatorsGroupName} 
                    onChange={onIndicatorsGroupNameChange} 
                    err={{hasErr: false, messageErr: ''}}/>
            </div>
            <div className="field">
                <CustomTextAreaView 
                    label="Описание группы: " 
                    value={indicatorsGroupDescription} 
                    onChange={onIndicatorsGroupDescriptionChange} 
                    err={{hasErr: false, messageErr: ''}} />
            </div>
            <div className="indicators-form-button">
                <CustomSaveButton />
                <CustomCancelButton onClick={onCancel} />
            </div>
        </form>
    );
}

export default IndicatorsGroupFormView;