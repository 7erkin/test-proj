import {loadingAction} from '../../actions/competence'

const initialState = {
    indicatorGroups: false,
    indicators: false,
    competencies: false,
    competenceGroups: false
}

const startLoadingIndicators = (state, action) => {
    return {
        ...state,
        indicators: true
    }
}

const startLoadingIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: true
    }
}

const startLoadingCompetencies = (state, action) => {
    return {
        ...state,
        competencies: true
    }
}

const startLoadingCompetenceGroups = (state, action) => {
    return {
        ...state,
        competenceGroups: true
    }
}

const finishLoadingIndicators = (state, action) => {
    return {
        ...state,
        indicators: false
    }
}

const finishLoadingIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: false
    }
}

const finishLoadingCompetencies = (state, action) => {
    return {
        ...state,
        competencies: false
    }
}

const finishLoadingCompetenceGroups = (state, action) => {
    return {
        ...state,
        competenceGroups: false
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case loadingAction.START_LOADING_COMPETENCE_GROUPS:
            return startLoadingCompetenceGroups(state, action);
        case loadingAction.START_LOADING_COMPETENCIES:
            return startLoadingCompetencies(state, action);
        case loadingAction.START_LOADING_INDICATOR_GROUPS:
            return startLoadingIndicatorGroups(state, action);
        case loadingAction.START_LOADING_INDICATORS:
            return startLoadingIndicators(state, action);
        case loadingAction.COMPETENCE_GROUPS_LOADED:
            return finishLoadingCompetenceGroups(state, action);
        case loadingAction.INDICATOR_GROUPS_LOADED:
            return finishLoadingIndicatorGroups(state, action);
        case loadingAction.INDICATORS_LOADED:
            return finishLoadingIndicators(state, action);
        case loadingAction.COMPETENCIES_LOADED:
            return finishLoadingCompetencies(state, action);
        default:
            return state;
    }
}
    
    export default rootReducer;