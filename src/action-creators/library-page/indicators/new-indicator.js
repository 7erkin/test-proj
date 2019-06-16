import { NEW_INDICATOR_GROUP_ID_SUCCESS_VALIDATION, NEW_INDICATOR_GROUP_ID_ERROR_VALIDATION, NEW_INDICATOR_NAME_SUCCESS_VALIDATION, NEW_INDICATOR_NAME_ERROR_VALIDATION, RESET_NEW_INDICATOR, UPDATE_NEW_INDICATOR_GROUP_ID, UPDATE_NEW_INDICATOR_NAME, NEW_INDICATOR_SAVED } from '../../../actions/library-page/indicators/new-indicator'

export const newIndicatorGroupIdSuccessValidation = () => {
    return {
        type: NEW_INDICATOR_GROUP_ID_SUCCESS_VALIDATION
    }
}
export const newIndicatorGroupIdErrorValidation = (errorMessage) => {
    return {
        type: NEW_INDICATOR_GROUP_ID_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const newIndicatorNameSuccessValidation = () => {
    return {
        type: NEW_INDICATOR_NAME_SUCCESS_VALIDATION
    }
}
export const newIndicatorNameErrorValidation = (errorMessage) => {
    return {
        type: NEW_INDICATOR_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const resetNewIndicator = () => {
    return {
        type: RESET_NEW_INDICATOR
    }
}
export const updateNewIndicatorIdGroup = id => {
    return {
        type: UPDATE_NEW_INDICATOR_GROUP_ID,
        value: id
    }
}
export const updateNewIndicatorName = name => {
    return {
        type: UPDATE_NEW_INDICATOR_NAME,
        value: name
    }
}
export const newIndicatorSaved = () => {
    return {
        type: NEW_INDICATOR_SAVED
    }
}
