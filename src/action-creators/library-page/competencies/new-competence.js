import { 
    NEW_COMPETENCE_NAME_SUCCESS_VALIDATION, 
    NEW_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION, 
    NEW_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION, 
    NEW_COMPETENCE_NAME_ERROR_VALIDATION, 
    NEW_COMPETENCE_DESCRIPTION_ERROR_VALIDATION, 
    NEW_COMPETENCE_GROUP_ID_ERROR_VALIDATION, 
    UPDATE_NEW_COMPETENCE_DESCRIPTION, 
    UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE, 
    NEW_COMPETENCE_SAVED, 
    UPDATE_NEW_COMPETENCE_GROUP_ID, 
    UPDATE_NEW_COMPETENCE_NAME, 
    RESET_NEW_COMPETENCE,
    UPDATE_NEW_COMPETENCE_POINTED_INDICATORS
} from '../../../actions/library-page/competencies/new-competence'


export const newCompetenceNameSuccessValidation = () => {
    return {
        type: NEW_COMPETENCE_NAME_SUCCESS_VALIDATION
    }
}
export const newCompetenceDescriptionSuccessValidation = () => {
    return {
        type: NEW_COMPETENCE_DESCRIPTION_SUCCESS_VALIDATION
    }
}
export const newCompetenceGroupIdSuccessValidation = () => {
    return {
        type: NEW_COMPETENCE_GROUP_ID_SUCCESS_VALIDATION
    }
}
export const newCompetenceNameErrorValidation = (errorMessage) => {
    return {
        type: NEW_COMPETENCE_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const newCompetenceDescriptionErrorValidation = (errorMessage) => {
    return {
        type: NEW_COMPETENCE_DESCRIPTION_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const newCompetenceGroupIdErrorValidation = (errorMessage) => {
    return {
        type: NEW_COMPETENCE_GROUP_ID_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const updateNewCompetenceDescription = description => {
    return {
        type: UPDATE_NEW_COMPETENCE_DESCRIPTION,
        value: description
    }
}

export const updateNewCompetencePointedIndicators = (indicator) => {
    return {
        type: UPDATE_NEW_COMPETENCE_POINTED_INDICATORS,
        value: indicator
    }
}
export const updateNewCompetenceIndicatorInfluence = (indicator) => {
    return {
        type: UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE,
        value: indicator
    }
}
export const newCompetenceSaved = () => {
    return {
        type: NEW_COMPETENCE_SAVED
    }
}
export const updateNewCompetenceGroupId = id => {
    return {
        type: UPDATE_NEW_COMPETENCE_GROUP_ID,
        value: id
    }
}
export const updateNewCompetenceName = name => {
    return {
        type: UPDATE_NEW_COMPETENCE_NAME,
        value: name
    }
}
export const resetNewCompetence = () => {
    return {
        type: RESET_NEW_COMPETENCE
    }
}