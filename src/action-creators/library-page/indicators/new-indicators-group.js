import { NEW_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION, NEW_INDICATORS_GROUP_NAME_ERROR_VALIDATION, NEW_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION, NEW_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION, UPDATE_NEW_INDICATORS_GROUP_NAME, UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION, NEW_INDICATORS_GROUP_SAVED, RESET_NEW_INDICATORS_GROUP } from '../../../actions/library-page/indicators/new-indicators-group'

export const newIndicatorsGroupNameSuccessValidation = () => {
    return {
        type: NEW_INDICATORS_GROUP_NAME_SUCCESS_VALIDATION
    }
}
export const newIndicatorsGroupNameErrorValidation = (errorMessage) => {
    debugger;
    return {
        type: NEW_INDICATORS_GROUP_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const newIndicatorsGroupDescriptionSuccessValidation = () => {
    return {
        type: NEW_INDICATORS_GROUP_DESCRIPTION_SUCCESS_VALIDATION
    }
}
export const newIndicatorsGroupDescriptionErrorValidation = (errorMessage) => {
    return {
        type: NEW_INDICATORS_GROUP_DESCRIPTION_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const updateNewIndicatorsGroupName = name => {
    return {
        type: UPDATE_NEW_INDICATORS_GROUP_NAME,
        value: name
    }
}
export const updateNewIndicatorsGroupsDescription = description => {
    return {
        type: UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION,
        value: description
    }
}
export const newIndicatorsGroupSaved = () => {
    return {
        type: NEW_INDICATORS_GROUP_SAVED
    }
}
export const resetNewIndicatorsGroup = () => {
    return {
        type: RESET_NEW_INDICATORS_GROUP
    }
}