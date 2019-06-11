import {
    UPDATE_NEW_QUESTION_BODY,
    SAVE_LOADED_QUESTIONS_GROUP_CONTENT,
    START_LOADING_QUESTIONS_GROUP_CONTENT,
    FINISH_LOADING_QUESTIONS_GROUP_CONTENT,
    SAVE_LOADED_COMPETENCIES,
    START_LOADING_QUESTIONS,
    FINISH_LOADING_QUESTIONS,
    SAVE_LOADED_QUESTIONS,
    UPDATE_DELETED_QUESTIONS,
    QUESTIONS_DELETED,
    RESET_DELETED_QUESTIONS,
    UPDATE_NEW_QUESTION_COMPETENCE_ID,
    NEW_QUESTION_COMPETENCE_ID_SUCCESS_VALIDATION,
    NEW_QUESTION_COMPETENCE_ID_ERROR_VALIDATION,
    NEW_QUESTION_BODY_ERROR_VALIDATION,
    NEW_QUESTION_BODY_SUCCESS_VALIDATION,
    RESET_NEW_QUESTION_FORM
} from '../../actions/library-page/questions'

export const resetNewQuestionForm = () => {
    return {
        type: RESET_NEW_QUESTION_FORM
    }
}

export const newQuestionCompetenceIdSuccessValidation = () => {
    return {
        type: NEW_QUESTION_COMPETENCE_ID_SUCCESS_VALIDATION
    }
}
export const newQuestionCompetenceIdErrorValidation = (errorMessage) => {
    return {
        type: NEW_QUESTION_COMPETENCE_ID_ERROR_VALIDATION,
        value: errorMessage
    }
}

export const newQuestionBodySuccessValidation = () => {
    return {
        type: NEW_QUESTION_BODY_SUCCESS_VALIDATION
    }
}
export const newQuestionBodyErrorValidation = (errorMessage) => {
    return {
        type: NEW_QUESTION_BODY_ERROR_VALIDATION,
        value: errorMessage
    }
}

export const saveLoadedCompetencies = (competencies) => {
    return {
        type: SAVE_LOADED_COMPETENCIES,
        value: competencies
    }
}
export const startLoadingQuestionsGroupContent = () => {
    return {
        type: START_LOADING_QUESTIONS_GROUP_CONTENT
    }
}

export const finishLoadingQuestionsGroupContent = () => {
    return {
        type: FINISH_LOADING_QUESTIONS_GROUP_CONTENT
    }
}

export const saveLoadedQuestionsGroupContent = content => {
    return {
        type: SAVE_LOADED_QUESTIONS_GROUP_CONTENT,
        value: content
    }
}
export const updateNewQuestionCompetenceId = id => {
    return {
        type: UPDATE_NEW_QUESTION_COMPETENCE_ID,
        value: id
    }
}
export const updateNewQuestionBody = body => {
    return {
        type: UPDATE_NEW_QUESTION_BODY,
        value: body
    }
}

export const startLoadingQuestions = () => {
    return {
        type: START_LOADING_QUESTIONS
    }
}

export const finishLoadingQuestions = () => {
    return {
        type: FINISH_LOADING_QUESTIONS
    }
}

export const saveLoadedQuestions = questions => {
    return {
        type: SAVE_LOADED_QUESTIONS,
        value: questions
    }
}

export const updateDeletedQuestions = id => {
    return {
        type: UPDATE_DELETED_QUESTIONS,
        value: id
    }
}
export const questionsDeleted = () => {
    return {
        type: QUESTIONS_DELETED
    }
}

export const resetDeletedQuestions = () => {
    return {
        type: RESET_DELETED_QUESTIONS
    }
}