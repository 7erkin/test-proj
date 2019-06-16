import initialState from "./initial-state";

export const setEditIndicatorsGroup = (state, { name, description }) => {
    return {
        ...state,
        name: {
            ...state.name,
            initial: name,
            text: name
        },
        description: {
            ...state.description,
            text: description
        }
    }
}
export const editIndicatorsGroupNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const editIndicatorsGroupNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const editIndicatorsGroupDescriptionValidationSucceeded = (state) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: ''
        }
    }
}
export const editIndicatorsGroupDescriptionValidationError = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: value
        }
    }
}
export const editIndicatorsGroupSaved = (state) => {
    return {
        ...initialState
        //loadingInitial: false
    }
}
export const updateEditIndicatorsGroupName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const updateEditIndicatorsGroupDescription = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            text: value
        }
    }
}
export const resetEditIndicatorsGroup = () => {
    return {
        ...initialState
    }
}