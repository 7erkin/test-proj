import initialState from "./initial-state";

export const resetPointedQuestions = (state, value) => {
    return {
        ...state
    }
}
export const resetNewQuestion = state => {
    return {
        ...state,
        newQuestion: {
            ...initialState.newQuestion
        }
    }
}
export const updateNewQuestionBody = (state, value) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            body: {
                ...state.newQuestion.body,
                text: value
            }
        }
    }
}
export const newQuestionBodyValidationSucceeded = (state) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            body: {
                ...state.newQuestion.body,
                errorMessage: ''
            }
        }
    }
}
export const newQuestionBodyValidationError = (state, value) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            body: {
                ...state.newQuestion.body,
                errorMessage: value
            }
        }
    }
}
export const updateNewQuestionCompetenceId = (state, value) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            idCompetence: {
                ...state.newQuestion.idCompetence,
                text: value
            }
        }
    }
}

export const newQuestionCompetenceIdValidationSucceeded = (state) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            idCompetence: {
                ...state.newQuestion.idCompetence,
                isValid: true,
                errorMessage: ''
            }
        }
    }
}
export const newQuestionCompetenceIdValidationError = (state, value) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            idCompetence: {
                ...state.newQuestion.idCompetence,
                isValid: false,
                errorMessage: value
            }
        }
    }
}

export const saveLoadedQuestionsGroupContent = (state, value) => {
    return {
        ...state,
        questionsGroupContent: value
    }
}
export const startLoadingQuestionsGroupContent = (state) => {
    return {
        ...state,
        loadingQuestionsGroupContent: true
    }
}
export const finishLoadingQuestionsGroupContent = (state) => {
    return {
        ...state,
        loadingQuestionsGroupContent: false
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
export const questionsDeleted = (state) => {
    return {
        ...state,
        deletedQuestions: []
    }
}