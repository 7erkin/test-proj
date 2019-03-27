import {entityAction} from '../../actions/competence'

const initialState = {
    competencies: [],
    competenceGroups: [],
    indicatorGroups: [], // группы индикаторов для аккордеона
    indicators: [], // индикаторы для аккордеона по группам индикаторов
    activeCompetenceGroupId: null,
    activeIndicatorGroupId: null, // ид группы индикаторов выбранной на аккордеоне
    editCompetenceId: null
}

const saveCompetenceGroups = (state, action) => {
    return {
        ...state,
        competenceGroups: action.payload.competenceGroups
    }
}

const saveCompetencies = (state, action) => {
    return {
        ...state,
        competencies: action.payload.competencies
    }
}

const saveIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: action.payload.indicatorGroups
    }
}

const saveIndicators = (state, action) => {
    return {
        ...state,
        indicators: action.payload.indicators
    }
}

const resetCompetenceGroups = (state, action) => {
    return {
        ...state,
        competenceGroups: []
    }
}

const resetCompetencies = (state, action) => {
    return {
        ...state,
        competencies: []
    }
}

const resetIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: []
    }
}

const resetIndicators = (state, action) => {
    return {
        ...state,
        indicators: []
    }
}

const setActiveCompetenceGroupId = (state, action) => {
    return {
        ...state,
        activeCompetenceGroupId: action.payload.id
    }
}

const setActiveIndicatorGroupId = (state, action) => {
    return {
        ...state,
        activeIndicatorGroupId: action.payload.id
    }
}

const resetActiveCompetenceGroupId = (state, action) => {
    return {
        ...state,
        activeCompetenceGroupId: null
    }
}

const resetActiveIndicatorGroupId = (state, action) => {
    return {
        ...state,
        activeCompetenceGroupId: null
    }
}

const setEditCompetenceId = (state, action) => {
    return {
        ...state,
        editCompetenceId: action.payload.id
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case entityAction.SAVE_COMPETENCE_GROUPS:
            return saveCompetenceGroups(state, action);
        case entityAction.SAVE_COMPETENCIES:
            return saveCompetencies(state, action);
        case entityAction.SAVE_INDICATORS:
            return saveIndicators(state, action);
        case entityAction.SAVE_INDICATOR_GROUPS:
            return saveIndicatorGroups(state, action);
        case entityAction.RESET_COMPETENCIES:
            return resetCompetencies(state, action);
        case entityAction.RESET_COMPETENCE_GROUPS:
            return resetCompetenceGroups(state, action);
        case entityAction.RESET_INDICATOR_GROUPS:
            return resetIndicatorGroups(state, action);
        case entityAction.RESET_INDICATORS:
            return resetIndicators(state, action);
        case entityAction.SET_ACTIVE_COMPETENCE_GROUP_ID:
            return setActiveCompetenceGroupId(state, action);
        case entityAction.RESET_ACTIVE_COMPETENCE_GROUP_ID:
            return resetActiveCompetenceGroupId(state, action);
        case entityAction.SET_ACTIVE_INDICATOR_GROUP_ID:
            return setActiveIndicatorGroupId(state, action);
        case entityAction.RESET_ACTIVE_INDICATOR_GROUP_ID:
            return resetActiveIndicatorGroupId(state, action);
        case entityAction.SET_EDIT_COMPETENCE_ID:
            return setEditCompetenceId(state, action);
        default:
            return state;
    }
}

export default rootReducer;