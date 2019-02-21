import {
    DELETE_COMPETENCE_GROUP,
    CREATE_COMPETENCE_GROUP,
    CREATE_COMPETENCE,
    DELETE_COMPETENCE,
    CHANGE_COMPETENCE,
    SAVE_LOADED_COMPETENCE_GROUPS
} from '../actions/competence'

const deleteCompetenceGroupReducer = (state, action) => {}

const createCompetenceGroupReducer = (state, action) => {}

const createCompetenceReducer = (state, action) => {}

const deleteCompetenceReducer = (state, action) => {}

const changeCompetenceReducer = (state, action) => {}

const saveLoadedCompetenceGroupsReducer = (state, action) => {
    return action.payload.competenceGroups;
}

const rootReducer = (state = [], action) => {
    switch(action.type){
        case CREATE_COMPETENCE_GROUP:
            return createCompetenceGroupReducer(state, action);
        case DELETE_COMPETENCE_GROUP:
            return deleteCompetenceGroupReducer(state, action);
        case CREATE_COMPETENCE:
            return createCompetenceReducer(state, action);
        case DELETE_COMPETENCE:
            return deleteCompetenceReducer(state, action);
        case CHANGE_COMPETENCE:
            return changeCompetenceReducer(state, action);
        case SAVE_LOADED_COMPETENCE_GROUPS:
            return saveLoadedCompetenceGroupsReducer(state, action);
        default:
            return state;
    }
}

export default rootReducer;