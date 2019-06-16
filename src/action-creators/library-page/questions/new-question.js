import { RESET_NEW_QUESTION, NEW_QUESTION_COMPETENCE_ID_SUCCESS_VALIDATION, NEW_QUESTION_COMPETENCE_ID_ERROR_VALIDATION, NEW_QUESTION_BODY_SUCCESS_VALIDATION, NEW_QUESTION_BODY_ERROR_VALIDATION, UPDATE_NEW_QUESTION_COMPETENCE_ID, UPDATE_NEW_QUESTION_BODY } from '../../../actions/library-page/questions/new-question'

export const resetNewQuestion = () => {
    return {
        type: RESET_NEW_QUESTION
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