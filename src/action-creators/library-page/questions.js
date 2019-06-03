import {
    UPDATE_NEW_QUESTION_BODY,
    UPDATE_NEW_QUESTION_GROUP_ID,
    UPDATE_NEW_QUESTIONS_GROUP_NAME,
    UPDATE_NEW_QUESTIONS_GROUP_DESCRIPTION,
    UPDATE_EDIT_QUESTIONS_GROUP_NAME,
    UPDATE_EDIT_QUESTIONS_GROUP_DESCRIPTION,
    SAVE_LOADED_QUESTIONS_GROUPS,
    SAVE_LOADED_QUESTIONS_GROUP_CONTENT,
    START_LOADING_QUESTIONS_GROUP_CONTENT,
    FINISH_LOADING_QUESTIONS_GROUP_CONTENT,
    SAVE_LOADED_COMPETENCIES,
    START_LOADING_QUESTIONS,
    FINISH_LOADING_QUESTIONS,
    SAVE_LOADED_QUESTIONS,
    UPDATE_DELETED_QUESTIONS,
    QUESTIONS_DELETED,
    QUESTIONS_GROUPS_DELETED,
    UPDATE_DELETED_QUESTIONS_GROUPS,
    RESET_DELETED_QUESTIONS,
    RESET_DELETED_QUESTIONS_GROUPS,
    NEW_QUESTIONS_GROUP_SAVED,
    EDIT_QUESTIONS_GROUP_SAVED
} from '../../actions/library-page/questions'

export const saveLoadedCompetencies = (competencies) => {
    return {
        type: SAVE_LOADED_COMPETENCIES,
        value: competencies
    }
}
export const startLoadingQuestionsGroupContent = () => {
    return {
        type: START_LOADING_QUESTIONS_GROUP_CONTENT
    }
}

export const finishLoadingQuestionsGroupContent = () => {
    return {
        type: FINISH_LOADING_QUESTIONS_GROUP_CONTENT
    }
}

export const saveLoadedQuestionsGroups = questionsGroups => {
    return {
        type: SAVE_LOADED_QUESTIONS_GROUPS,
        value: questionsGroups
    }
}

export const saveLoadedQuestionsGroupContent = content => {
    return {
        type: SAVE_LOADED_QUESTIONS_GROUP_CONTENT,
        value: content
    }
}

export const updateEditQuestionsGroupDescription = description => {
    return {
        type: UPDATE_EDIT_QUESTIONS_GROUP_DESCRIPTION,
        value: description
    }
}

export const updateEditQuestionsGroupName = name => {
    return {
        type: UPDATE_EDIT_QUESTIONS_GROUP_NAME,
        value: name
    }
}

export const updateNewQuestionsGroupDescription = description => {
    return {
        type: UPDATE_NEW_QUESTIONS_GROUP_DESCRIPTION,
        value: description
    }
}

export const updateNewQuestionsGroupName = name => {
    return {
        type: UPDATE_NEW_QUESTIONS_GROUP_NAME,
        value: name
    }
}


export const updateNewQuestionBody = body => {
    return {
        type: UPDATE_NEW_QUESTION_BODY,
        value: body
    }
}

export const updateNewQuestionGroupId = id => {
    return {
        type: UPDATE_NEW_QUESTION_GROUP_ID,
        value: id
    }
}

export const startLoadingQuestions = () => {
    return {
        type: START_LOADING_QUESTIONS
    }
}

export const finishLoadingQuestions = () => {
    return {
        type: FINISH_LOADING_QUESTIONS
    }
}

export const saveLoadedQuestions = questions => {
    return {
        type: SAVE_LOADED_QUESTIONS,
        value: questions
    }
}

export const updateDeletedQuestions = id => {
    return {
        type: UPDATE_DELETED_QUESTIONS,
        value: id
    }
}
export const questionsDeleted = () => {
    return {
        type: QUESTIONS_DELETED
    }
}

export const questionsGroupsDeleted = () => {
    return {
        type: QUESTIONS_GROUPS_DELETED
    }
}
export const updateDeletedQuestionsGroups = id => {
    return {
        type: UPDATE_DELETED_QUESTIONS_GROUPS,
        value: id
    }
}
export const resetDeletedQuestions = () => {
    return {
        type: RESET_DELETED_QUESTIONS
    }
}
export const resetDeletedQuestionsGroups = () => {
    return {
        type: RESET_DELETED_QUESTIONS_GROUPS
    }
}
export const newQuestionsGroupSaved = () => {
    return {
        type: NEW_QUESTIONS_GROUP_SAVED
    }
}

export const editQuestionsGroupSaved = () => {
    return {
        type: EDIT_QUESTIONS_GROUP_SAVED
    }
}