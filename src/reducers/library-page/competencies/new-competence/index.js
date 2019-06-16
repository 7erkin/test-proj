import * as _ from './new-competence'

import initialState from './initial-state'

import {
    UPDATE_NEW_COMPETENCE_NAME,
    UPDATE_NEW_COMPETENCE_DESCRIPTION,
    UPDATE_NEW_COMPETENCE_GROUP_ID,
    UPDATE_NEW_COMPETENCE_POINTED_INDICATORS,
    UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE,

    NEW_COMPETENCE_NAME_SUCCESS_VALIDATION,
    NEW_COMPETENCE_NAME_ERROR_VALIDATION,
    NEW_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION,
    NEW_COMPETENCE_DESCRIPTION_ERROR_VALIDATION,
    NEW_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION,
    NEW_COMPETENCE_GROUP_ID_ERROR_VALIDATION,

    RESET_NEW_COMPETENCE,
    NEW_COMPETENCE_SAVED
} from '../../../../actions/library-page/competencies/new-competence'

export default (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_NEW_COMPETENCE_NAME:
            return _.updateNewCompetenceName(state, value);
        case UPDATE_NEW_COMPETENCE_DESCRIPTION:
            return _.updateNewCompetenceDescription(state, value);
        case UPDATE_NEW_COMPETENCE_GROUP_ID:
            return _.updateNewCompetenceIdGroup(state, value);
        case UPDATE_NEW_COMPETENCE_POINTED_INDICATORS:
            return _.updateNewCompetencePointedIndicators(state, value);
        case UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE:
            return _.updateNewCompetencePointedIndicatorInfluence(state, value);
        case NEW_COMPETENCE_NAME_SUCCESS_VALIDATION:
            return _.newCompetenceNameValidationSucceeded(state);
        case NEW_COMPETENCE_NAME_ERROR_VALIDATION:
            return _.newCompetenceNameValidationError(state, value);
        case NEW_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION:
            return _.newCompetenceDescriptionValidationSucceeded(state);
        case NEW_COMPETENCE_DESCRIPTION_ERROR_VALIDATION:
            return _.newCompetenceDescriptionValidationError(state, value);
        case NEW_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION:
            return _.newCompetenceGroupIdValidationSucceeded(state);
        case NEW_COMPETENCE_GROUP_ID_ERROR_VALIDATION:
            return _.newCompetenceGroupIdValidationError(state, value);
        case RESET_NEW_COMPETENCE:
            return _.resetNewCompetence(state);
        case NEW_COMPETENCE_SAVED:
            return _.newCompetenceSaved(state);
        default:
            return state;
    }
}