import initialState from './initial-state'

import * as _ from './new-question'

import {
    UPDATE_NEW_QUESTION_BODY,
    UPDATE_NEW_QUESTION_COMPETENCE_ID,

    NEW_QUESTION_BODY_ERROR_VALIDATION,
    NEW_QUESTION_COMPETENCE_ID_ERROR_VALIDATION,
    NEW_QUESTION_BODY_SUCCESS_VALIDATION,
    NEW_QUESTION_COMPETENCE_ID_SUCCESS_VALIDATION,

    RESET_NEW_QUESTION
} from '../../../../actions/library-page/questions/new-question'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_NEW_QUESTION_BODY:
            return _.updateNewQuestionBody(state, value)
        case UPDATE_NEW_QUESTION_COMPETENCE_ID:
            return _.updateNewQuestionCompetenceId(state, value)
        case NEW_QUESTION_BODY_ERROR_VALIDATION:
            return _.newQuestionBodyValidationError(state, value)
        case NEW_QUESTION_COMPETENCE_ID_ERROR_VALIDATION:
            return _.newQuestionCompetenceIdValidationError(state, value)
        case NEW_QUESTION_BODY_SUCCESS_VALIDATION:
            return _.newQuestionBodyValidationSucceeded(state, value)
        case NEW_QUESTION_COMPETENCE_ID_SUCCESS_VALIDATION:
            return _.newQuestionCompetenceIdValidationSucceeded(state, value)
        case RESET_NEW_QUESTION:
            return _.resetNewQuestion(state, value)
        default:
            return state;
    }
}