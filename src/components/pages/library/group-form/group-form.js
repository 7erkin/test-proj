import React from 'react'

import './style.css'

import CustomInputView from '../../../common/custom-input-view';
import CustomTextAreaView from '../../../common/custom-textarea-view';
import CustomSaveButton from '../../../common/custom-save-button';
import CustomCancelButton from '../../../common/custom-cancel-button';

const GroupFormView = ({
    groupName,
    onGroupNameChange,
    groupDescription,
    onGroupDescriptionChange,
    onSubmit, onCancel, 
    validation: {
        errorGroupName,
        errorGroupDescription
    },
    onGroupNameBlur,
    onGroupDescriptionBlur
}) => {

    return (
        <form className="group-form" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <div className="field">
                <CustomInputView
                    label="Название группы: " 
                    value={groupName} 
                    onChange={onGroupNameChange} 
                    err={errorGroupName}
                    onBlur={onGroupNameBlur} />
            </div>
            <div className="field">
                <CustomTextAreaView
                    label="Описание группы: " 
                    value={groupDescription} 
                    onChange={onGroupDescriptionChange} 
                    err={errorGroupDescription} 
                    onBlur={onGroupDescriptionBlur} />
            </div>
            <div className="group-form-button">
                <CustomSaveButton />
                <CustomCancelButton onClick={onCancel} />
            </div>
        </form>
    );
}

export default GroupFormView;