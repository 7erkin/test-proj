import initialState from "./initial-state";

export const newCompetenciesGroupNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const newCompetenciesGroupDescriptionValidationSucceeded = (state) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: ''
        }
    }
}
export const newCompetenciesGroupNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const newCompetenciesGroupDescriptionValidationError = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: value
        }
    }
}
export const newCompetenciesGroupSaved = (state) => {
    return {
        ...initialState,
        loadingInitial: false
    }
}
export const updateNewCompetenciesGroupName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const updateNewCompetenciesGroupDescription = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            text: value
        }
    }
}
export const resetNewCompetenciesGroup = () => {
    return {
        ...initialState
    }
}