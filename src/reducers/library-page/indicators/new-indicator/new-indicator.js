import initialState from './initial-state'

export const updateNewIndicatorName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const updateNewIndicatorGroupId = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            text: value
        }
    }
}
export const newIndicatorNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const newIndicatorNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const newIndicatorGroupIdValidationSucceeded = (state) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: ''
        }
    }
}
export const newIndicatorGroupIdValidationError = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: value
        }
    }
}
export const newIndicatorSaved = (state) => {
    return {
        ...initialState
        // loadingInitial: false
    }
}
export const resetNewIndicator = (state) => {
    return {
        ...initialState
    }
}