import * as _ from './edit-indicators-group'

import initialState from './initial-state'

import {
    UPDATE_EDIT_INDICATORS_GROUP_NAME,
    UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION,

    SET_EDIT_INDICATORS_GROUP,

    EDIT_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION,
    EDIT_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION,
    EDIT_INDICATORS_GROUP_NAME_ERROR_VALIDATION,
    EDIT_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION,

    EDIT_INDICATORS_GROUP_SAVED,

    RESET_EDIT_INDICATORS_GROUP
} from '../../../../actions/library-page/indicators/edit-indicators-group'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_EDIT_INDICATORS_GROUP_NAME:
            return _.updateEditIndicatorsGroupName(state, value);
        case UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION:
            return _.updateEditIndicatorsGroupDescription(state, value);
        case SET_EDIT_INDICATORS_GROUP:
            return _.setEditIndicatorsGroup(state, value);
        case EDIT_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION:
            return _.editIndicatorsGroupDescriptionValidationSucceeded(state);
        case EDIT_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION:
            return _.editIndicatorsGroupDescriptionValidationError(state, value);
        case EDIT_INDICATORS_GROUP_NAME_ERROR_VALIDATION:
            return _.editIndicatorsGroupNameValidationError(state, value);
        case EDIT_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION:
            return _.editIndicatorsGroupNameValidationSucceeded(state);
        case RESET_EDIT_INDICATORS_GROUP:
            return _.resetEditIndicatorsGroup(state);
        case EDIT_INDICATORS_GROUP_SAVED:
            return _.editIndicatorsGroupSaved(state)
        default:
            return state;
    }
}