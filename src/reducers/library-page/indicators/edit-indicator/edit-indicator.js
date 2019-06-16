import initialState from "./initial-state";

export const setEditIndicator = (state, { name, idGroup }) => {
    return {
        ...state,
        name: {
            ...state.name,
            initial: name,
            text: name
        },
        idGroup: {
            ...state.idGroup,
            text: idGroup
        }
    }
}
export const editIndicatorNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const editIndicatorNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const editIndicatorGroupIdValidationSucceeded = (state) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: ''
        }
    }
}
export const editIndicatorGroupIdValidationError = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            errorMessage: value
        }
    }
}
export const editIndicatorSaved = (state) => {
    return {
        ...initialState
        //loadingInitial: false
    }
}
export const updateEditIndicatorGroupId = (state, value) => {
    return {
        ...state,
        idGroup: {
            ...state.idGroup,
            text: value
        }
    }
}
export const updateEditIndicatorName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const resetEditIndicator = (state) => {
    return {
        ...initialState
    }
}