import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

import CustomSelectView from '../../../../common/custom-select-view';
import CustomCancelButton from '../../../../common/custom-cancel-button';
import CustomSaveButton from '../../../../common/custom-save-button';
import CustomTextAreaView from '../../../../common/custom-textarea-view';

const QuestionFormView = ({
    questionBody,
    validation: {
        errCompetenceId,
        errBody
    },
    onQuestionBodyChange,
    competenceId,
    onCompetenceIdChange,
    competencies,
    onSubmit, onCancel,
    onCompetenceIdBlur,
    onQuestionBodyBlur
}) => {
    return (
        <form className="question-form" onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <div className="field">
                <CustomSelectView 
                    label="Компетенция проверяемая вопросом" 
                    onChange={onCompetenceIdChange} 
                    items={competencies} 
                    value={competenceId}
                    err={errCompetenceId}
                    onBlur={onCompetenceIdBlur}/>
            </div>
            <div className="field">
                <CustomTextAreaView
                    label="Вопрос" 
                    value={questionBody}
                    onChange={onQuestionBodyChange}
                    err={errBody}
                    onBlur={onQuestionBodyBlur}/>
            </div>
            <div className="question-form-button">
                <CustomSaveButton />
                <CustomCancelButton onClick={onCancel} />
            </div>
        </form>
    );
}

QuestionFormView.propTypes = {
    questionName: PropTypes.string.isRequired,
    validation: {
        hasErr: PropTypes.bool.isRequired,
        messageErr: PropTypes.string.isRequired
    }.isRequired,
    competencies: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    competenceId: PropTypes.number.isRequired,
    onQuestionNameChange: PropTypes.func.isRequired,
    onCompetenceChange: PropTypes.func.isRequired
}

export default QuestionFormView;