export const startLoadingContent = (state) => {
    return {
        ...state,
        loadingContent: true
    }
}
export const finishLoadingContent = (state) => {
    return {
        ...state,
        loadingContent: false
    }
}
export const startLoadingQuestions = (state) => {
    return {
        ...state,
        loadingQuestions: true
    }
}
export const finishLoadingQuestions = (state) => {
    return {
        ...state,
        loadingQuestions: false
    }
}