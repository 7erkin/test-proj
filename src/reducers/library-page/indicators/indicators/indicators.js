export const updateVisibleIndicators = (state, value) => {
    return {
        ...state,
        visibleIndicators: state.indicators.filter(el => el.name.toUpperCase().indexOf(value.toUpperCase()) !== -1)
    }
}
export const updateVisibleIndicatorsGroups = (state, value) => {
    return {
        ...state,
        visibleIndicatorsGroups: state.indicatorsGroups.filter(el => el.name.toUpperCase().indexOf(value.toUpperCase()) !== -1)
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
export const saveLoadedIndicators = (state, value) => {
    return {
        ...state,
        indicators: value,
        visibleIndicators: value
    }
}
export const saveLoadedIndicatorsGroups = (state, value) => {
    return {
        ...state,
        indicatorsGroups: value,
        visibleIndicatorsGroups: value
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