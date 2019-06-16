import initialState from './initial-state'

import * as _ from './loading'

import {
    START_LOADING_QUESTIONS,
    START_LOADING_CONTENT,

    FINISH_LOADING_QUESTIONS,
    FINISH_LOADING_CONTENT
} from '../../../../actions/library-page/questions/loading'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case START_LOADING_QUESTIONS:
            return _.startLoadingQuestions(state);
        case START_LOADING_CONTENT:
            return _.startLoadingContent(state)
        case FINISH_LOADING_QUESTIONS:
            return _.finishLoadingQuestions(state)
        case FINISH_LOADING_CONTENT:    
            return _.finishLoadingContent(state)
        default:
            return state;
    }
}