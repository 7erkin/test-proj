import * as _ from './new-competencies-group'

import initialState from './initial-state'

import {
    UPDATE_NEW_COMPETENCIES_GROUP_NAME,
    UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION,

    NEW_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION,
    NEW_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION,
    NEW_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION,
    NEW_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION,

    NEW_COMPETENCIES_GROUP_SAVED,
    RESET_NEW_COMPETENCIES_GROUP
} from '../../../../actions/library-page/competencies/new-competencies-group'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_NEW_COMPETENCIES_GROUP_NAME:
            return _.updateNewCompetenciesGroupName(state, value); 
        case UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION:
            return _.updateNewCompetenciesGroupDescription(state, value);
        case NEW_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION:
            return _.newCompetenciesGroupNameValidationSucceeded(state);
        case NEW_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION:
            return _.newCompetenciesGroupNameValidationError(state, value);
        case NEW_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION:
            return _.newCompetenciesGroupDescriptionValidationSucceeded(state);
        case NEW_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION:
            return _.newCompetenciesGroupDescriptionValidationError(state, value);
        case NEW_COMPETENCIES_GROUP_SAVED:
            return _.newCompetenciesGroupSaved(state);
        case RESET_NEW_COMPETENCIES_GROUP:
            return _.resetNewCompetenciesGroup(state);
        default:
            return state;
    }
}