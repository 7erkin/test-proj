import initialState from './initial-state'

export const newIndicatorSaved = (state) => {
    return {
        ...state,
        newIndicator: {
            ...initialState.newIndicator
        },
        loadingInitial: false
    }
}
export const newIndicatorsGroupSaved = (state) => {
    return {
        ...state,
        newIndicatorsGroup: {
            ...initialState.newIndicatorsGroup
        },
        loadingInitial: false
    }
}
export const editIndicatorSaved = (state) => {
    return {
        ...state,
        editIndicator: {
            ...initialState.editIndicator
        },
        loadingInitial: false
    }
}
export const editIndicatorsGroupSaved = (state) => {
    return {
        ...state,
        editIndicatorsGroup: {
            ...initialState.editIndicatorsGroup
        },
        loadingInitial: false
    }
}
export const resetDeletedIndicatorsGroups = (state) => {
    return {
        ...state,
        deletedIndicatorsGroups: []
    }
}
export const resetDeletedIndicators = (state) => {
    return {
        ...state,
        deletedIndicators: []
    }
}
export const startLoadingIndicators = (state, value) => {
    return {
        ...state,
        loadingIndicators: true
    }
}
export const finishLoadingIndicators = (state, value) => {
    return {
        ...state,
        loadingIndicators: false
    }
}
export const saveLoadedIndicators = (state, value) => {
    return {
        ...state,
        indicators: value
    }
}
export const saveLoadedIndicatorsGroups = (state, value) => {
    return {
        ...state,
        indicatorsGroups: value
    }
}
export const updateEditIndicatorsGroupName = (state, value) => {
    return {
        ...state,
        editIndicatorsGroup: {
            ...state.editIndicatorsGroup,
            name: value
        }
    }
}
export const updateEditIndicatorsGroupDescription = (state, value) => {
    return {
        ...state,
        editIndicatorsGroup: {
            ...state.editIndicatorsGroup,
            description: value
        }
    }
}
export const updateNewIndicatorsGroupName = (state, value) => {
    return {
        ...state,
        newIndicatorsGroup: {
            ...state.newIndicatorsGroup,
            name: value
        }
    }
}
export const updateNewIndicatorsGroupDescription = (state, value) => {
    return {
        ...state,
        newIndicatorsGroup: {
            ...state.newIndicatorsGroup,
            description: value
        }
    }
}
export const updateDeletedIndicators = (state, value) => {
    const deletedIndicators = [...state.deletedIndicators];
    const index = deletedIndicators.findIndex(id => id == value);

    index === -1 ? deletedIndicators.push(value) : deletedIndicators.splice(index, 1);

    return {
        ...state,
        deletedIndicators
    }
}
export const updateDeletedIndicatorsGroups = (state, value) => {
    const deletedIndicatorsGroups = [...state.deletedIndicatorsGroups];
    const index = deletedIndicatorsGroups.findIndex(id => id == value);

    index === -1 ? deletedIndicatorsGroups.push(value) : deletedIndicatorsGroups.splice(index, 1);

    return {
        ...state,
        deletedIndicatorsGroups
    }
}
export const updateEditIndicatoridGroup = (state, value) => {
    return {
        ...state,
        editIndicator: {
            ...state.editIndicator,
            idGroup: value
        }
    }
}
export const updateEditIndicatorName = (state, value) => {
    return {
        ...state,
        editIndicator: {
            ...state.editIndicator,
            name: value
        }
    }
}
export const updateNewIndicatorName = (state, value) => {
    return {
        ...state,
        newIndicator: {
            ...state.newIndicator,
            name: value
        }
    }
}
export const updateNewIndicatoridGroup = (state, value) => {
    return {
        ...state,
        newIndicator: {
            ...state.newIndicator,
            idGroup: value
        }
    }
}
export const indicatorsGroupsDeleted = (state) => {
    return {
        ...state,
        deletedIndicatorsGroups: [],
        loadingInitial: false
    }
}