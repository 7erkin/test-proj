import * as declaredAction from '../../actions/competence'

const updateLoadingCompetencies = (state, action) => {
    return {
        ...state,
        competencies: action.payload.competencies
    }
}

const updateLoadingCompetenceGroups = (state, action) => {
    return {
        ...state,
        competenceGroups: action.payload.competenceGroups
    }
}

const updatePointedCompetenciesForDelete = (state, action) => {
    const loadingStatus = (action.type === declaredAction.START_LOADING_COMPETENCIES);
    return {
        ...state,
        loading: {
            ...state.loading,
            competencies: loadingStatus
        }
    }
}

const updatePointedCompetenceGroupsForDelete = (state, action) => {
    const loadingStatus = action.type === declaredAction.START_LOADING_COMPETENCE_GROUPS;
    return {
        ...state,
        loading: {
            ...state.loading,
            competenceGroups: loadingStatus
        }
    }
}

const saveLoadedComeptencies = (state, action) => {
    return {
        ...state,
        competencies: action.payload.competencies
    };
}

const saveLoadedCompetenceGroups = (state, action) => {
    return {
        ...state,
        competenceGroups: action.payload.competenceGroups
    };
}

// зачем удалять если можно отправить запрос на удаление на сервер а затем перезапросить
const deletePointedCompetencies = (state, action) => {}
const deletePointedCompetenceGroups = (state, action) => {}

const resetPointedCompetenceGroups = (state, action) => {
    return {
        ...state,
        pointedCompetenceGroupsForDelete: []
    };
}

const resetPointedCompetencies = (state, action) => {
    return {
        ...state,
        pointedCompetenciesForDelete: []
    };
}

const updateActiveCompetenceGroup = (state, action) => {
    return {
        ...state,
        activeCompetenceGroupId: action.payload.id
    };
}

const initialState = {
    competencies: [],
    competenceGroups: [],
    pointedCompetenciesForDelete: [],
    pointedCompetenceGroupsForDelete: [],
    activeCompetenceGroupId: null,
    indicatorGroups: [], // группы индикаторов для аккордеона
    activeIndicatorGroupId: null, // ид группы индикаторов выбранной на аккордеоне
    indicators: [], // индикаторы для аккордеона по группам индикаторов
    newCompetence: {}, // хранится информация с формы добавления новой компетенции
    newCompetenceGroup: {}, // хранится информация с формы добавления(/редактирования) новой компетенции
    loading: {
        indicatorGroups: false,
        indicators: false,
        competencies: false,
        competenceGroups: false
    },
    error: {
        competenciesLoading: false,
        competenceGroupsLoading: false
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case declaredAction.SAVE_LOADED_COMPETENCE_GROUPS:
            return saveLoadedCompetenceGroups(state, action);
        case declaredAction.SAVE_LOADED_COMPETENCIES:
            return saveLoadedComeptencies(state, action);
        case declaredAction.START_LOADING_COMPETENCE_GROUPS:
        case declaredAction.FINISH_LOADING_COMPETENCE_GROUPS:
            return updateLoadingCompetenceGroups(state, action);
        case declaredAction.START_LOADING_COMPETENCIES:
        case declaredAction.FINISH_LOADING_COMPETENCIES:
            return updateLoadingCompetencies(state, action);
        case declaredAction.POINT_COMPETENCE_GROUP_OUT_FOR_DELETE:
        case declaredAction.RESET_POINTED_COMPETENCE_GROUPS:
            return updatePointedCompetenceGroupsForDelete(state, action);
        case declaredAction.RESET_POINTED_COMPETENCIES:
        case declaredAction.POINT_COMPETENCE_OUT_FOR_DELETE:
            return updatePointedCompetenciesForDelete(state, action);
        case declaredAction.ERROR_LOADING_COMPETENCE_GROUPS:
        case declaredAction.ERROR_LOADING_COMPETENCIES:
        case declaredAction.DELETE_COMPETENCE_GROUPS:
            return deletePointedCompetenceGroups(state, action);
        case declaredAction.DELETE_POINTED_COMPETENCIES:
            return deletePointedCompetencies(state, action);
        case declaredAction.SET_ACTIVE_COMPETENCE_GROUP:
            return updateActiveCompetenceGroup(state, action);
        default:
            return state;
    }
}

export default rootReducer;