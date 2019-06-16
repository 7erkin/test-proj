import initialState from './initial-state'

import * as _ from './questions'

import {
    SAVE_LOADED_CONTENT,
    SAVE_LOADED_QUESTIONS,
    UPDATE_DELETED_QUESTIONS,
    RESET_DELETED_QUESTIONS
} from '../../../../actions/library-page/questions/questions'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case SAVE_LOADED_CONTENT:
            return _. saveLoadedQuestionsGroupContent(state, value)
        case SAVE_LOADED_QUESTIONS:
            return _.saveLoadedQuestions(state, value)
        case UPDATE_DELETED_QUESTIONS:
            return _.updateDeletedQuestions(state, value) 
        case RESET_DELETED_QUESTIONS:
            return _.resetDeletedQuestions(state)
        default:
            return state;
    }
}