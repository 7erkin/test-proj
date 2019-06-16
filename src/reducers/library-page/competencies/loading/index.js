import initialState from './initial-state'

import * as _ from './loading'

import {
    START_LOADING_COMPETENCIES,
    FINISH_LOADING_COMPETENCIES
} from '../../../../actions/library-page/competencies/loading'

export default (state = initialState, { type }) => {
    switch(type) {
        case START_LOADING_COMPETENCIES:
            return _.startLoadingCompetencies(state)
        case FINISH_LOADING_COMPETENCIES:
            return _.finishLoadingCompetencies(state)
        default:
            return state
    }
}