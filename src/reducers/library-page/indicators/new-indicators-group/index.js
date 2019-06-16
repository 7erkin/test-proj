import * as _ from './new-indicators-group'

import initialState from './initial-state'

import {
    UPDATE_NEW_INDICATORS_GROUP_NAME,
    UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION,

    RESET_NEW_INDICATORS_GROUP,

    NEW_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION,
    NEW_INDICATORS_GROUP_NAME_ERROR_VALIDATION,
    NEW_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION,
    NEW_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION
} from '../../../../actions/library-page/indicators/new-indicators-group'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_NEW_INDICATORS_GROUP_NAME:
            return _.updateNewIndicatorsGroupName(state, value)
        case UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION:
            return _.updateNewIndicatorsGroupDescription(state, value)
        case RESET_NEW_INDICATORS_GROUP:
            return _.resetNewIndicatorsGroup(state, value)
        case NEW_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION:
            return _.newIndicatorsGroupNameValidationSucceeded(state, value)
        case NEW_INDICATORS_GROUP_NAME_ERROR_VALIDATION:
            return _.newIndicatorsGroupNameValidationError(state, value)
        case NEW_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION:
            return _.newIndicatorsGroupDescriptionValidationSucceeded(state, value)
        case NEW_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION:
            return _.newIndicatorsGroupDescriptionValidationError(state, value)
        default:
            return state;
    }
}
