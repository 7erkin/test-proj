export const resetDeletedQuestions = (state, value) => {
    return {
        ...state,
        deletedQuestions: []
    }
}

export const saveLoadedQuestionsGroupContent = (state, value) => {
    return {
        ...state,
        content: value
    }
}
export const saveLoadedQuestions = (state, value) => {
    return {
        ...state,
        questions: value
    }
}
export const updateDeletedQuestions = (state, value) => {
    const deletedQuestions = [...state.deletedQuestions];
    const index = deletedQuestions.findIndex(id => id == value);

    index === -1 ? deletedQuestions.push(value) : deletedQuestions.splice(index, 1);

    return {
        ...state,
        deletedQuestions
    }
}