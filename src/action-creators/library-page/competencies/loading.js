import { START_LOADING_COMPETENCIES, FINISH_LOADING_COMPETENCIES } from '../../../actions/library-page/competencies/loading'

export const startLoadingCompetencies = () => {
    return {
        type: START_LOADING_COMPETENCIES
    }
}
export const finishLoadingCompetencies = () => {
    return {
        type: FINISH_LOADING_COMPETENCIES
    }
}