import initialState from './initial-state'

export const newCompetenceSaved = (state) => {
    return {
        ...state,
        newCompetence: {
            ...initialState.newCompetence
        },
        loadingInitial: false
    }
}
export const newCompetenciesGroupSaved = (state) => {
    return {
        ...state,
        newCompetenciesGroup: {
            ...initialState.newCompetenciesGroup
        },
        loadingInitial: false
    }
}
export const editCompetenceSaved = (state) => {
    return {
        ...state,
        editCompetence: {
            ...initialState.editCompetence
        },
        loadingInitial: false
    }
}
export const editCompetenciesGroupSaved = (state) => {
    return {
        ...state,
        editCompetenciesGroup: {
            ...initialState.editCompetenciesGroup
        },
        loadingInitial: false
    }
}
export const resetDeletedCompetenciesGroups = (state) => {
    return {
        ...state,
        deletedCompetenciesGroups: []
    }
}
export const resetDeletedCompetencies = (state) => {
    return {
        ...state,
        deletedCompetencies: []
    }
}
export const startLoadingCompetencies = (state, value) => {
    return {
        ...state,
        loadingCompetencies: true
    }
}
export const finishLoadingCompetencies = (state, value) => {
    return {
        ...state,
        loadingCompetencies: false
    }
}
export const saveLoadedCompetencies = (state, value) => {
    return {
        ...state,
        competencies: value
    }
}
export const saveLoadedCompetenciesGroups = (state, value) => {
    return {
        ...state,
        competenciesGroups: value
    }
}
export const updateEditCompetenciesGroupName = (state, value) => {
    return {
        ...state,
        editCompetenciesGroup: {
            ...state.editCompetenciesGroup,
            name: value
        }
    }
}
export const updateEditCompetenciesGroupDescription = (state, value) => {
    return {
        ...state,
        editCompetenciesGroup: {
            ...state.editCompetenciesGroup,
            description: value
        }
    }
}
export const updateNewCompetenciesGroupName = (state, value) => {
    return {
        ...state,
        newCompetenciesGroup: {
            ...state.newCompetenciesGroup,
            name: value
        }
    }
}
export const updateNewCompetenciesGroupDescription = (state, value) => {
    return {
        ...state,
        newCompetenciesGroup: {
            ...state.newCompetenciesGroup,
            description: value
        }
    }
}
export const updateDeletedCompetencies = (state, value) => {
    const deletedCompetencies = [...state.deletedCompetencies];
    const index = deletedCompetencies.findIndex(id => id == value);

    index === -1 ? deletedCompetencies.push(value) : deletedCompetencies.splice(index, 1);

    return {
        ...state,
        deletedCompetencies
    }
}
export const updateDeletedCompetenciesGroups = (state, value) => {
    const deletedCompetenciesGroups = [...state.deletedCompetenciesGroups];
    const index = deletedCompetenciesGroups.findIndex(id => id == value);

    index === -1 ? deletedCompetenciesGroups.push(value) : deletedCompetenciesGroups.splice(index, 1);

    return {
        ...state,
        deletedCompetenciesGroups
    }
}
export const updateEditCompetenceIdGroup = (state, value) => {
    return {
        ...state,
        editCompetence: {
            ...state.editCompetence,
            idGroup: value
        }
    }
}
export const updateEditCompetenceName = (state, value) => {
    return {
        ...state,
        editCompetence: {
            ...state.editCompetence,
            name: value
        }
    }
}
export const updateNewCompetenceName = (state, value) => {
    return {
        ...state,
        newCompetence: {
            ...state.newCompetence,
            name: value
        }
    }
}
export const updateNewCompetenceIdGroup = (state, value) => {
    return {
        ...state,
        newCompetence: {
            ...state.newCompetence,
            idGroup: value
        }
    }
}
export const competenciesGroupsDeleted = (state) => {
    return {
        ...state,
        deletedCompetenciesGroups: [],
        loadingInitial: false
    }
}