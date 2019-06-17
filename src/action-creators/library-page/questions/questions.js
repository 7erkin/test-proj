import { SAVE_LOADED_CONTENT, SAVE_LOADED_QUESTIONS, QUESTIONS_DELETED, RESET_DELETED_QUESTIONS, UPDATE_DELETED_QUESTIONS, UPDATE_VISIBLE_CONTENT } from '../../../actions/library-page/questions/questions'

export const saveLoadedContent = content => {
    return {
        type: SAVE_LOADED_CONTENT,
        value: content
    }
}
export const saveLoadedQuestions = questions => {
    return {
        type: SAVE_LOADED_QUESTIONS,
        value: questions
    }
}
export const questionsDeleted = () => {
    return {
        type: QUESTIONS_DELETED
    }
}

export const resetDeletedQuestions = () => {
    return {
        type: RESET_DELETED_QUESTIONS
    }
}
export const updateDeletedQuestions = id => {
    return {
        type: UPDATE_DELETED_QUESTIONS,
        value: id
    }
}
export const updateVisibleContent = competenceName => {
    return {
        type: UPDATE_VISIBLE_CONTENT,
        value: competenceName
    }
}