import * as _ from './edit-competencies-group'

import initialState from './initial-state'

import {
    SET_EDIT_COMPETENCIES_GROUP,
    UPDATE_EDIT_COMPETENCIES_GROUP_NAME,
    UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION,
    EDIT_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION,
    EDIT_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION,
    EDIT_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION,
    EDIT_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION,
    RESET_EDIT_COMPETENCIES_GROUP,
    EDIT_COMPETENCIES_GROUP_SAVED
} from '../../../../actions/library-page/competencies/edit-competencies-group'

export default (state = initialState, action) => {
    const { type, value } = action;

    switch(type) {
        case SET_EDIT_COMPETENCIES_GROUP:
            return _.setEditCompetenciesGroup(state, value);
        case UPDATE_EDIT_COMPETENCIES_GROUP_NAME:
            return _.updateEditCompetenciesGroupName(state, value);
        case UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION:
            return _.updateEditCompetenciesGroupDescription(state, value);
        case EDIT_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION:
            return _.editCompetenciesGroupNameValidationSucceeded(state);
        case EDIT_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION:
            return _.editCompetenciesGroupNameValidationError(state, value);
        case EDIT_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION:
            return _.editCompetenciesGroupDescriptionValidationSucceeded(state, value);
        case EDIT_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION:
            return _.editCompetenciesGroupDescriptionValidationError(state, value);
        case RESET_EDIT_COMPETENCIES_GROUP:
            return _.resetEditCompetenciesGroup(state);
        case EDIT_COMPETENCIES_GROUP_SAVED:
            return _.editCompetenciesGroupSaved(state);
        default:
            return state;
    }
}