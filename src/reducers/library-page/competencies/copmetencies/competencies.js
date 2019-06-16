export const updateVisibleCompetencies = (state, value) => {
    return {
        ...state,
        visibleCompetencies: state.competencies.filter(el => el.name.toUpperCase().indexOf(value.toUpperCase()) !== -1)
    }
}
export const updateVisibleCompetenciesGroups = (state, value) => {
    return {
        ...state,
        visibleCompetenciesGroups: state.competenciesGroups.filter(el => el.name.toUpperCase().indexOf(value.toUpperCase()) !== -1)
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
export const saveLoadedCompetencies = (state, value) => {
    return {
        ...state,
        competencies: value,
        visibleCompetencies: value
    }
}
export const saveLoadedCompetenciesGroups = (state, value) => {
    return {
        ...state,
        competenciesGroups: value,
        visibleCompetenciesGroups: value
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
export const competenciesDeleted = state => {
    return {
        ...state,
        deletedCompetencies: []
    }
}
export const competenciesGroupsDeleted = state => {
    return {
        ...state,
        deletedCompetenciesGroups: []
    }
}