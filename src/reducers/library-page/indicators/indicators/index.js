import * as _ from './indicators'

import initialState from './initial-state'

import {
    SAVE_LOADED_INDICATORS,
    SAVE_LOADED_INDICATORS_GROUPS,
    UPDATE_DELETED_INDICATORS,
    UPDATE_DELETED_INDICATORS_GROUPS,
    RESET_DELETED_INDICATORS,
    RESET_DELETED_INDICATORS_GROUPS,
    UPDATE_VISIBLE_INDICATORS,
    UPDATE_VISIBLE_INDICATORS_GROUPS
} from '../../../../actions/library-page/indicators/indicators'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case SAVE_LOADED_INDICATORS:
            return _.saveLoadedIndicators(state, value)
        case SAVE_LOADED_INDICATORS_GROUPS:
            return _.saveLoadedIndicatorsGroups(state, value)
        case UPDATE_DELETED_INDICATORS:
            return _.updateDeletedIndicators(state, value)
        case UPDATE_DELETED_INDICATORS_GROUPS:
            return _.updateDeletedIndicatorsGroups(state, value)
        case RESET_DELETED_INDICATORS:
            return _.resetDeletedIndicators(state)
        case RESET_DELETED_INDICATORS_GROUPS:
            return _.resetDeletedIndicatorsGroups(state)
        case UPDATE_VISIBLE_INDICATORS:
            return _.updateVisibleIndicators(state, value)
        case UPDATE_VISIBLE_INDICATORS_GROUPS:
            return _.updateVisibleIndicatorsGroups(state, value)
        default:
            return state;
    }
}
