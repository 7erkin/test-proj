import * as _ from './loading'

import initialState from './initial-state'

import {
    START_LOADING_INDICATORS,
    START_LOADING_INDICATORS_GROUPS,
    FINISH_LOADING_INDICATORS,
    FINISH_LOADING_INDICATORS_GROUPS
} from '../../../../actions/library-page/indicators/loading'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case START_LOADING_INDICATORS:
            return _.startLoadingIndicators(state)
        case START_LOADING_INDICATORS_GROUPS:
            return _.startLoadingIndicatorsGroups(state)
        case FINISH_LOADING_INDICATORS:
            return _.finishLoadingIndicators(state)
        case FINISH_LOADING_INDICATORS_GROUPS:
            return _.finishLoadingIndicatorsGroups(state)
        default:
            return state;
    }
}
