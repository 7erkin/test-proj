import { EDIT_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION, EDIT_INDICATORS_GROUP_NAME_ERROR_VALIDATION, EDIT_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION, EDIT_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION, SET_EDIT_INDICATORS_GROUP, UPDATE_EDIT_INDICATORS_GROUP_NAME, UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION, EDIT_INDICATORS_GROUP_SAVED, RESET_EDIT_INDICATORS_GROUP } from '../../../actions/library-page/indicators/edit-indicators-group'

export const editIndicatorsGroupNameSuccessValidation = () => {
    return {
        type: EDIT_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION
    }
}
export const editIndicatorsGroupNameErrorValidation = (errorMessage) => {
    return {
        type: EDIT_INDICATORS_GROUP_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const editIndicatorsGroupDescriptionSuccessValidation = () => {
    return {
        type: EDIT_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION
    }
}
export const editIndicatorsGroupDescriptionErrorValidation = (errorMessage) => {
    return {
        type: EDIT_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const setEditIndicatorsGroup = (indicatorsGroup) => {
    return {
        type: SET_EDIT_INDICATORS_GROUP,
        value: indicatorsGroup
    }
}
export const updateEditIndicatorsGroupName = name => {
    return {
        type: UPDATE_EDIT_INDICATORS_GROUP_NAME,
        value: name
    }
}
export const updateEditIndicatorsGroupDescription = description => {
    return {
        type: UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION,
        value: description
    }
}
export const editIndicatorsGroupSaved = () => {
    return {
        type: EDIT_INDICATORS_GROUP_SAVED
    }
}
export const resetEditIndicatorsGroup = () => {
    return {
        type: RESET_EDIT_INDICATORS_GROUP
    }
}