import * as _ from './edit-indicator'

import initialState from './initial-state'

import {
    UPDATE_EDIT_INDICATOR_NAME,
    UPDATE_EDIT_INDICATOR_GROUP_ID,

    SET_EDIT_INDICATOR,

    EDIT_INDICATOR_NAME_SUCCESS_VALIDATION,
    EDIT_INDICATOR_NAME_ERROR_VALIDATION,
    EDIT_INDICATOR_GROUP_ID_SUCCESS_VALIDATION,
    EDIT_INDICATOR_GROUP_ID_ERROR_VALIDATION,

    RESET_EDIT_INDICATOR
} from '../../../../actions/library-page/indicators/edit-indicator'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_EDIT_INDICATOR_NAME:
            return _.updateEditIndicatorName(state, value); 
        case UPDATE_EDIT_INDICATOR_GROUP_ID:
            return _.updateEditIndicatorGroupId(state, value); 
        case EDIT_INDICATOR_NAME_SUCCESS_VALIDATION:
            return _.editIndicatorNameValidationSucceeded(state); 
        case UPDATE_EDIT_INDICATOR_NAME:
            return _.updateEditIndicatorName(state, value); 
        case EDIT_INDICATOR_NAME_ERROR_VALIDATION:
            return _.editIndicatorNameValidationError(state, value); 
        case EDIT_INDICATOR_GROUP_ID_SUCCESS_VALIDATION:
            return _.editIndicatorGroupIdValidationSucceeded(state); 
        case EDIT_INDICATOR_GROUP_ID_ERROR_VALIDATION:
            return _.editIndicatorGroupIdValidationError(state, value); 
        case RESET_EDIT_INDICATOR:
            return _.resetEditIndicator(state); 
        case SET_EDIT_INDICATOR:
            return _.setEditIndicator(state, value);
        default: 
            return state;
    }
}