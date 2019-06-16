import initialState from "./initial-state";

export const resetNewQuestion = state => {
    return {
        ...initialState
    }
}
export const updateNewQuestionBody = (state, value) => {
    return {
        ...state,
        body: {
            ...state.body,
            text: value
        }
    }
}
export const newQuestionBodyValidationSucceeded = (state) => {
    return {
        ...state,
        body: {
            ...state.body,
            errorMessage: ''
        }
    }
}
export const newQuestionBodyValidationError = (state, value) => {
    return {
        ...state,
        body: {
            ...state.body,
            errorMessage: value
        }
    }
}
export const updateNewQuestionCompetenceId = (state, value) => {
    return {
        ...state,
        idCompetence: {
            ...state.idCompetence,
            text: value
        }
    }
}

export const newQuestionCompetenceIdValidationSucceeded = (state) => {
    return {
        ...state,
        idCompetence: {
            ...state.idCompetence,
            isValid: true,
            errorMessage: ''
        }
    }
}
export const newQuestionCompetenceIdValidationError = (state, value) => {
    return {
        ...state,
        idCompetence: {
            ...state.idCompetence,
            isValid: false,
            errorMessage: value
        }
    }
}