export const fulfilInitialLoading = (state) => {
    return {
        ...state,
        loadingInitial: true
    }
}
export const resetInitialLoading = (state) => {
    return {
        ...state,
        loadingInitial: false
    }
}
export const startApplyingChanges = (state) => {
    return {
        ...state,
        applyingChanges: true
    }
}
export const finishApplyingChanges = (state) => {
    return {
        ...state,
        applyingChanges: false
    }
}