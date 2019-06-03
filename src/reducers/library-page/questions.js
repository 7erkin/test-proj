import initialState from "./initial-state";

export const resetPointedQuestions = (state, value) => {
    return {
        ...state
    }
}
export const updateNewQuestionBody = (state, value) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            body: value
        }
    }
}
export const updateNewQuestionGroupId = (state, value) => {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            idCompetence: value
        }
    }
}
export const newQuestionsGroupSaved = state => {
    return {
        ...state,
        newQuestionsGroup: {
            ...initialState.newQuestionsGroup
        },
        loadingInitial: false
    }
}
export const editQuestionsGroupSaved = state => {
    return {
        ...state,
        editQuestionsGroup: {
            ...initialState.editQuestionsGroup
        },
        loadingInitial: false
    }
}
export const updateDeletedQuestionsGroups = (state, value) => {
    const deletedQuestionsGroups = [...state.deletedQuestionsGroups];
    const index = deletedQuestionsGroups.findIndex(id => id == value);

    index === -1 ? deletedQuestionsGroups.push(value) : deletedQuestionsGroups.splice(index, 1);

    return {
        ...state,
        deletedQuestionsGroups
    }
}
export const questionsGroupsDeleted = (state, value) => {
    return {
        ...state,
        loadingInitial: false,
        deletedQuestionsGroups: []
    }
}
export const updateNewQuestionsGroupName = (state, value) => {
    return {
        ...state,
        newQuestionsGroup: {
            ...state.newQuestionsGroup,
            name: value
        }
    }
}
export const updateNewQuestionsGroupDescription = (state, value) => {
    return {
        ...state,
        newQuestionsGroup: {
            ...state.newQuestionsGroup,
            description: value
        }
    }
}
export const updateEditQuestionsGroupName = (state, value) => {
    return {
        ...state,
        editQuestionsGroup: {
            ...state.editQuestionsGroup,
            name: value
        }
    }
}
export const updateEditQuestionsGroupDescription = (state, value) => {
    return {
        ...state,
        editQuestionsGroup: {
            ...state.editQuestionsGroup,
            description: value
        }
    }
}
export const saveLoadedQuestionsGroups = (state, value) => {
    return {
        ...state,
        questionsGroups: value
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