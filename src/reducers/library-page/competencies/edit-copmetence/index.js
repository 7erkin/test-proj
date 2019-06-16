import * as _ from './edit-competence'

import initialState from './initial-state'

import {
    UPDATE_EDIT_COMPETENCE_NAME,
    UPDATE_EDIT_COMPETENCE_DESCRIPTION,
    UPDATE_EDIT_COMPETENCE_GROUP_ID,
    UPDATE_EDIT_COMPETENCE_POINTED_INDICATORS,
    UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE,

    EDIT_COMPETENCE_NAME_SUCCESS_VALIDATION,
    EDIT_COMPETENCE_NAME_ERROR_VALIDATION,
    EDIT_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION,
    EDIT_COMPETENCE_GROUP_ID_ERROR_VALIDATION,
    EDIT_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION,
    EDIT_COMPETENCE_DESCRIPTION_ERROR_VALIDATION,

    EDIT_COMPETENCE_SAVED,
    RESET_EDIT_COMPETENCE,
    SET_EDIT_COMPETENCE
} from '../../../../actions/library-page/competencies/edit-competence'

export default (state = initialState, {type, value}) => {
    switch(type) {
        case UPDATE_EDIT_COMPETENCE_NAME:
            return _.updateEditCompetenceName(state, value)
        case UPDATE_EDIT_COMPETENCE_DESCRIPTION:
            return _.updateEditCompetenceDescription(state, value)
        case UPDATE_EDIT_COMPETENCE_GROUP_ID:
            return _.updateEditCompetenceGroupId(state, value)
        case UPDATE_EDIT_COMPETENCE_POINTED_INDICATORS:
            return _.updateEditCompetencePointedIndicators(state, value)
        case UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE:
            return _.updateEditCompetenceIndicatorInfluence(state, value)
        
        case EDIT_COMPETENCE_NAME_SUCCESS_VALIDATION:
            return _.editCompetenceNameValidationSucceeded(state)
        case EDIT_COMPETENCE_NAME_ERROR_VALIDATION:
            return _.editCompetenceNameValidationError(state, value)
        case EDIT_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION:
            return _.editCompetenceGroupIdValidationSucceeded(state)
        case EDIT_COMPETENCE_GROUP_ID_ERROR_VALIDATION:
            return _.editCompetenceGroupIdValidationError(state, value)
        case EDIT_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION:
            return _.editCompetenceDescriptionValidationSucceeded(state)
        case EDIT_COMPETENCE_DESCRIPTION_ERROR_VALIDATION:
            return _.editCompetenceDescriptionValidationError(state, value)

        case EDIT_COMPETENCE_SAVED:
            return _.editCompetenceSaved(state)
        case RESET_EDIT_COMPETENCE:
            return _.resetEditCompetence(state)

        case SET_EDIT_COMPETENCE:
            return _.setEditCompetence(state, value)

        default: 
            return state;
    }
}