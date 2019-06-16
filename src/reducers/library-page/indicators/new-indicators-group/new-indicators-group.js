import initialState from './initial-state'

export const newIndicatorsGroupNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const newIndicatorsGroupNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const newIndicatorsGroupDescriptionValidationSucceeded = (state) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: ''
        }
    }
}
export const newIndicatorsGroupDescriptionValidationError = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: value
        }
    }
}
export const resetNewIndicatorsGroup = (state) => {
    return {
        ...initialState
    }
}
export const newIndicatorsGroupSaved = (state) => {
    return {
        ...initialState
        //loadingInitial: false
    }
}
export const updateNewIndicatorsGroupName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const updateNewIndicatorsGroupDescription = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            text: value
        }
    }
}