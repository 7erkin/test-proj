import { 
    SET_EDIT_COMPETENCE, 
    EDIT_COMPETENCE_NAME_SUCCESS_VALIDATION, 
    EDIT_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION, 
    EDIT_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION, 
    EDIT_COMPETENCE_NAME_ERROR_VALIDATION, 
    EDIT_COMPETENCE_DESCRIPTION_ERROR_VALIDATION, 
    EDIT_COMPETENCE_GROUP_ID_ERROR_VALIDATION, 
    RESET_EDIT_COMPETENCE, 
    EDIT_COMPETENCE_SAVED, 
    UPDATE_EDIT_COMPETENCE_DESCRIPTION, 
    UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE, 
    UPDATE_EDIT_COMPETENCE_NAME, 
    UPDATE_EDIT_COMPETENCE_GROUP_ID, 
    UPDATE_EDIT_COMPETENCE_POINTED_INDICATORS
} from '../../../actions/library-page/competencies/edit-competence'

export const setEditCompetence = competence => {
    return {
        type: SET_EDIT_COMPETENCE,
        value: competence
    }
}
export const editCompetenceNameSuccessValidation = () => {
    return {
        type: EDIT_COMPETENCE_NAME_SUCCESS_VALIDATION
    }
}
export const editCompetenceDescriptionSuccessValidation = () => {
    return {
        type: EDIT_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION
    }
}
export const editCompetenceGroupIdSuccessValidation = () => {
    return {
        type: EDIT_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION
    }
}
export const editCompetenceNameErrorValidation = (errorMessage) => {
    return {
        type: EDIT_COMPETENCE_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const editCompetenceDescriptionErrorValidation = (errorMessage) => {
    return {
        type: EDIT_COMPETENCE_DESCRIPTION_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const editCompetenceGroupIdErrorValidation = (errorMessage) => {
    return {
        type: EDIT_COMPETENCE_GROUP_ID_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const resetEditCompetence = () => {
    return {
        type: RESET_EDIT_COMPETENCE
    }
}
export const editCompetenceSaved = () => {
    return {
        type: EDIT_COMPETENCE_SAVED
    }
}
export const updateEditCompetenceDescription = description => {
    return {
        type: UPDATE_EDIT_COMPETENCE_DESCRIPTION,
        value: description
    }
}
export const updateEditCompetencePointedIndicators = indicator => {
    return {
        type: UPDATE_EDIT_COMPETENCE_POINTED_INDICATORS,
        value: indicator
    }
}
export const updateEditCompetenceIndicatorInfluence = (indicator) => {
    return {
        type: UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE,
        value: indicator
    }
}
export const updateEditCompetenceName = name => {
    return {
        type: UPDATE_EDIT_COMPETENCE_NAME,
        value: name
    }
}

export const updateEditCompetenceGroupId = id => {
    return {
        type: UPDATE_EDIT_COMPETENCE_GROUP_ID,
        value: id
    }
}