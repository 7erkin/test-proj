import { 
    SET_EDIT_COMPETENCIES_GROUP, 
    EDIT_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION, 
    EDIT_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION, 
    EDIT_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION, 
    EDIT_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION, 
    EDIT_COMPETENCIES_GROUP_SAVED, 
    UPDATE_EDIT_COMPETENCIES_GROUP_NAME, 
    UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION, 
    RESET_EDIT_COMPETENCIES_GROUP 
} from '../../../actions/library-page/competencies/edit-competencies-group'

export const setEditCompetenciesGroup = competenciesGroup => {
    return {
        type: SET_EDIT_COMPETENCIES_GROUP,
        value: competenciesGroup
    }
}
export const editCompetenciesGroupNameSuccessValidation = () => {
    return {
        type: EDIT_COMPETENCIES_GROUP_NAME_SUCCESS_VALIDATION
    }
}
export const editCompetenciesGroupDescriptionSuccessValidation = () => {
    return {
        type: EDIT_COMPETENCIES_GROUP_DESCRIPTION_SUCCESS_VALIDATION
    }
}
export const editCompetenciesGroupNameErrorValidation = (errorMessage) => {
    return {
        type: EDIT_COMPETENCIES_GROUP_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const editCompetenciesGroupDescriptionErrorValidation = (errorMessage) => {
    return {
        type: EDIT_COMPETENCIES_GROUP_DESCRIPTION_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const resetEditCompetenciesGroup = () => {
    return {
        type: RESET_EDIT_COMPETENCIES_GROUP
    }
}
export const editCompetenciesGroupSaved = () => {
    return {
        type: EDIT_COMPETENCIES_GROUP_SAVED
    }
}
export const updateEditCompetenciesGroupName = name => {
    return {
        type: UPDATE_EDIT_COMPETENCIES_GROUP_NAME,
        value: name
    }
}
export const updateEditCompetenciesGroupDescription = description => {
    return {
        type: UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION,
        value: description
    }
}