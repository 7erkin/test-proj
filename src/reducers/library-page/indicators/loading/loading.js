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
export const startLoadingIndicatorsGroups = (state) => {
    return {
        ...state,
        loadingIndicatorsGroups: true
    }
}
export const finishLoadingIndicatorsGroups = (state) => {
    return {
        ...state,
        loadingIndicatorsGroups: false
    }
}