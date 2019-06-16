import { START_LOADING_QUESTIONS, FINISH_LOADING_QUESTIONS, START_LOADING_CONTENT, FINISH_LOADING_CONTENT } from '../../../actions/library-page/questions/loading'

export const startLoadingContent = () => {
    return {
        type: START_LOADING_CONTENT
    }
}
export const finishLoadingContent = () => {
    return {
        type: FINISH_LOADING_CONTENT
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