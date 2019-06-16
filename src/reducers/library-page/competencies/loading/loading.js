export const startLoadingCompetencies = (state) => {
    return {
        ...state,
        loadingCompetencies: true
    }
}
export const finishLoadingCompetencies = (state) => {
    return {
        ...state,
        loadingCompetencies: false
    }
}
export const startLoadingIndicators = state => {
    return {
        ...state,
        loadingIndicators: true
    }
}
export const finishLoadingIndicators = state => {
    return {
        ...state,
        loadingIndicators: false
    }
}
export const startLoadingIndicatorsGroups = state => {
    return {
        ...state,
        loadingIndicatorsGroups: true
    }
}
export const finishLoadingIndicatorsGroups = state => {
    return {
        ...state,
        loadingIndicatorsGroups: false
    }
}