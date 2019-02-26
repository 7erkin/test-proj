import {
    DELETE_COMPETENCE_GROUPS,
    CREATE_COMPETENCE_GROUP,
    CREATE_COMPETENCE,
    DELETE_COMPETENCE,
    UPDATE_COMPETENCE,
    SAVE_LOADED_COMPETENCE_GROUPS
} from '../actions/competence'

import {
    getRandomId
} from '../../library'

const deleteCompetenceGroupsReducer = (state, action) => {}

// bad variant
const createCompetenceGroupReducer = (state, action) => {
    const newState = state.slice();
    newState.push({
        id: getRandomId(),
        name: action.payload.name,
        description: action.payload.description,
        competencies: []
    });
    return newState;
}

const createCompetenceReducer = (state, action) => {}

const deleteCompetenceReducer = (state, action) => {}

const updateCompetenceReducer = (state, action) => {}

const saveLoadedCompetenceGroupsReducer = (state, action) => {
    return action.payload.competenceGroups;
}

const rootReducer = (state = [], action) => {
    switch(action.type){
        case CREATE_COMPETENCE_GROUP:
            return createCompetenceGroupReducer(state, action);
        case DELETE_COMPETENCE_GROUPS:
            return deleteCompetenceGroupsReducer(state, action);
        case CREATE_COMPETENCE:
            return createCompetenceReducer(state, action);
        case DELETE_COMPETENCE:
            return deleteCompetenceReducer(state, action);
        case UPDATE_COMPETENCE:
            return updateCompetenceReducer(state, action);
        case SAVE_LOADED_COMPETENCE_GROUPS:
            return saveLoadedCompetenceGroupsReducer(state, action);
        default:
            return state;
    }
}

export default rootReducer;