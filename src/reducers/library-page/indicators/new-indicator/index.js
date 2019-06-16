import * as _ from './new-indicator'

import initialState from './initial-state'

import {
    UPDATE_NEW_INDICATOR_NAME,
    UPDATE_NEW_INDICATOR_GROUP_ID,

    RESET_NEW_INDICATOR,

    NEW_INDICATOR_SAVED,

    NEW_INDICATOR_NAME_SUCCESS_VALIDATION,
    NEW_INDICATOR_NAME_ERROR_VALIDATION,
    NEW_INDICATOR_GROUP_ID_SUCCESS_VALIDATION,
    NEW_INDICATOR_GROUP_ID_ERROR_VALIDATION
} from '../../../../actions/library-page/indicators/new-indicator'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_NEW_INDICATOR_NAME:
            return _.updateNewIndicatorName(state, value);
        case UPDATE_NEW_INDICATOR_GROUP_ID:
            return _.updateNewIndicatorGroupId(state, value);
        case RESET_NEW_INDICATOR:
            return _.resetNewIndicator(state);
        case NEW_INDICATOR_SAVED:
            return _.newIndicatorSaved(state, value);
        case NEW_INDICATOR_NAME_SUCCESS_VALIDATION:
            return _.newIndicatorNameValidationSucceeded(state);
        case NEW_INDICATOR_NAME_ERROR_VALIDATION:
            return _.newIndicatorNameValidationError(state, value);
        case NEW_INDICATOR_GROUP_ID_SUCCESS_VALIDATION:
            return _.newIndicatorGroupIdValidationSucceeded(state);
        case NEW_INDICATOR_GROUP_ID_ERROR_VALIDATION:
            return _.newIndicatorGroupIdValidationError(state, value);
        default:
            return state;
    }
}
