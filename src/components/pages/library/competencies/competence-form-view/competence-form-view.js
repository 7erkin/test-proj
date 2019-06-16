import React from 'react'

import './style.css'
import '../common-styles.css/form.css'

import CustomSaveButton from '../../../../common/custom-save-button';
import CustomCancelButton from '../../../../common/custom-cancel-button';
import CustomTextAreaView from '../../../../common/custom-textarea-view';
import CustomInputView from '../../../../common/custom-input-view';
import CustomSelectView from '../../../../common/custom-select-view';

const CompetenceFormView = ({
    competenceName,
    competenceDescription,
    competenciesGroupId,
    competenciesGroups,
    onCompetenceNameChange,
    onCompetenceDescriptionChange,
    onCompetenceGroupIdChange,
    onSubmit, onCancel,
    accordeon,
    validation: {
        errorCompetenceName,
        errorCompetenceDescription,
        errorCompetenceGroupId
    },
    onCompetenceNameBlur,
    onCompetenceDescriptionBlur,
    onCompetenceGroupIdBlur
}) => {
    return (
        <form className="competence-form competence-form-common" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <div className="horizontal-wrapper name-and-groupid">
                <div className="field">
                    <CustomInputView 
                        value={competenceName} 
                        label='Название компетенции' 
                        onChange={onCompetenceNameChange} 
                        err={errorCompetenceName} 
                        onBlur={onCompetenceNameBlur} />
                </div>
                <div className="field">
                    <CustomSelectView 
                        value={competenciesGroupId} 
                        label='Группа компетенций' 
                        items={competenciesGroups} 
                        onChange={onCompetenceGroupIdChange}
                        err={errorCompetenceGroupId} 
                        onBlur={onCompetenceGroupIdBlur} />
                </div>
            </div>
            <div className="field">
                <CustomTextAreaView 
                    value={competenceDescription} 
                    label='Описание компетенции' 
                    onChange={onCompetenceDescriptionChange} 
                    err={errorCompetenceDescription} 
                    onBlur={onCompetenceDescriptionBlur} />
            { accordeon }
            </div>
            <div className="competence-form-button">
                <CustomSaveButton />
                <CustomCancelButton onClick={onCancel} />
            </div>
        </form>
    );
}

export default CompetenceFormView;