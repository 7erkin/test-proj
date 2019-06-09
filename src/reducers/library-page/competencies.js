import initialState from './initial-state'

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
export const updateEditCompetenceDescription = (state, value) => {
    return {
        ...state,
        editCompetence: {
            ...state.editCompetence,
            description: value
        }
    }
}
export const updateEditCompetenceIndicatorInfluence = (state, value) => {
    const { id, influence } = value;
    const indicators = state.editCompetence.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);
    indicators[index].influence = influence;

    return {
        ...state,
        editCompetence: {
            ...state.editCompetence,
            indicators
        }
    }
}
export const updateEditCompetencePointedIndicators = (state, value) => {
    const { id } = value; 
    const indicators = state.editCompetence.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);

    if(index === -1)
        indicators.push({
            ...value,
            influence: 'positive'
        })
    else 
        indicators.splice(index, 1);

    return {
        ...state,
        editCompetence: {
            ...state.editCompetence,
            indicators
        }
    }
}
export const uploadEditedCompetence = (state, value) => {
    return {
        ...state,
        editCompetence: {
            ...value
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

export const updateNewCompetencePointedIndicators = (state, value) => {
    const { id } = value; 
    const indicators = state.newCompetence.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);

    if(index === -1)
        indicators.push({
            ...value,
            influence: 'positive'
        })
    else 
        indicators.splice(index, 1);

    return {
        ...state,
        newCompetence: {
            ...state.newCompetence,
            indicators
        }
    }
}

export const updateNewCompetencePointedIndicatorInfluence = (state, value) => {
    const { id, influence } = value;
    const indicators = state.newCompetence.indicators.slice();
    const index = indicators.findIndex(el => el.id == id);
    indicators[index].influence = influence;

    return {
        ...state,
        newCompetence: {
            ...state.newCompetence,
            indicators
        }
    }
}

export const updateNewCompetenceDescription = (state, value) => {
    return {
        ...state,
        newCompetence: {
            ...state.newCompetence,
            description: value
        }
    }
}
export const resetNewCompetenceForm = state => {
    return {
        ...state,
        newCompetence: {
            ...initialState.newCompetence
        }
    }
}
export const resetEditCompetenceForm = state => {
    return {
        ...state,
        editCompetence: {
            ...initialState.editCompetence
        }
    }
}