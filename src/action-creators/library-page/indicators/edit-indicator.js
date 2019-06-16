import { 
    EDIT_INDICATOR_GROUP_ID_SUCCESS_VALIDATION, 
    EDIT_INDICATOR_GROUP_ID_ERROR_VALIDATION, 
    EDIT_INDICATOR_NAME_SUCCESS_VALIDATION, 
    EDIT_INDICATOR_NAME_ERROR_VALIDATION, 
    SET_EDIT_INDICATOR, 
    UPDATE_EDIT_INDICATOR_NAME, 
    UPDATE_EDIT_INDICATOR_GROUP_ID, 
    EDIT_INDICATOR_SAVED,
    RESET_EDIT_INDICATOR
} from '../../../actions/library-page/indicators/edit-indicator'


export const editIndicatorGroupIdSuccessValidation = () => {
    return {
        type: EDIT_INDICATOR_GROUP_ID_SUCCESS_VALIDATION
    }
}
export const editIndicatorGroupIdErrorValidation = (errorMessage) => {
    return {
        type: EDIT_INDICATOR_GROUP_ID_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const editIndicatorNameSuccessValidation = () => {
    return {
        type: EDIT_INDICATOR_NAME_SUCCESS_VALIDATION
    }
}
export const editIndicatorNameErrorValidation = (errorMessage) => {
    return {
        type: EDIT_INDICATOR_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}
export const setEditIndicator = (indicator) => {
    return {
        type: SET_EDIT_INDICATOR,
        value: indicator
    }
}
export const updateEditIndicatorName = name => {
    return {
        type: UPDATE_EDIT_INDICATOR_NAME,
        value: name
    }
}

export const updateEditIndicatorIdGroup = id => {
    return {
        type: UPDATE_EDIT_INDICATOR_GROUP_ID,
        value: id
    }
}
export const editIndicatorSaved = () => {
    return {
        type: EDIT_INDICATOR_SAVED
    }
}
export const resetEditIndicator = () => {
    return {
        type: RESET_EDIT_INDICATOR
    }
}