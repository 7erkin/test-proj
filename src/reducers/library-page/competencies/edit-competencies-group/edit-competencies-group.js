import initialState from "./initial-state";

export const setEditCompetenciesGroup = (state, { name, description }) => {
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
export const editCompetenciesGroupNameValidationSucceeded = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}
export const editCompetenciesGroupDescriptionValidationSucceeded = (state) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: ''
        }
    }
}
export const editCompetenciesGroupNameValidationError = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}
export const editCompetenciesGroupDescriptionValidationError = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            errorMessage: value
        }
    }
}
export const resetEditCompetenciesGroup = () => {
    return {
        ...initialState
    }
}
export const editCompetenciesGroupSaved = (state) => {
    return {
        ...initialState
        //loadingInitial: false
    }
}
export const updateEditCompetenciesGroupName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}
export const updateEditCompetenciesGroupDescription = (state, value) => {
    return {
        ...state,
        description: {
            ...state.description,
            text: value
        }
    }
}