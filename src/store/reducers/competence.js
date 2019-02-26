import {
    DELETE_COMPETENCE_GROUPS,
    CREATE_COMPETENCE_GROUP,
    CREATE_COMPETENCE,
    DELETE_COMPETENCE,
    UPDATE_COMPETENCE,
    SAVE_LOADED_COMPETENCE_GROUPS
} from '../actions/competence'

const deleteCompetenceGroupsReducer = (state, action) => {
    const nextState = state.filter(competenceGroup => action.payload.ids.findIndex(id => id == competenceGroup.id) === -1);
    return nextState;
}

// bad variant
const createCompetenceGroupReducer = (state, action) => {
    const newState = state.slice();
    newState.push({...action.payload.competenceGroup});
    return newState;
}

const createCompetenceReducer = (state, action) => {
    const nextState = state.slice(); // state is competence groups
    let nextCompetence = {...action.payload.competence};
    // we have to unpack competence fields except function field
    const indexGroup = nextState.findIndex(competenceGroup => competenceGroup.id == action.payload.competenceGroupId);
    nextState[indexGroup].competencies.push(nextCompetence);
    return nextState;
}   

const deleteCompetenceReducer = (state, action) => {
    const nextState = state.slice();
    const {
        competenceId,
        competenceGroupId
    } = action.payload;
    const competenceGroupIndex = nextState.findIndex(group => group.id == competenceGroupId);
    const competenceIndex = nextState[competenceGroupIndex].competencies.findIndex(competence => competence.id == competenceId);
    nextState[competenceGroupIndex].competencies.splice(competenceIndex, 1);
    return nextState;
}

const updateCompetenceReducer = (state, action) => {
    const nextState = state.slice();
    const {
        competence,
        competenceGroupId
     } = action.payload;
    debugger;
    // if competence group doesn't change
    const competenceGroupIndex = nextState.findIndex(group => group.competencies.some(el => el.id == competence.id));
    if(nextState[competenceGroupIndex].id != competenceGroupId){
        // remove competence from old group
        const competenceIndex = nextState[competenceGroupIndex].competencies.findIndex(el => el.id == competence.id);
        nextState[competenceGroupIndex].competencies.splice(competenceIndex, 1);
        // add competence to new group
        const nextCompetenceGroupIndex = nextState.findIndex(group => group.id == competenceGroupIndex);
        nextState[nextCompetenceGroupIndex].competencies.push({...competence});
    } else {
        // update competence
        const competenceIndex = nextState[competenceGroupIndex].competencies.findIndex(el => el.id == competence.id);
        nextState[competenceGroupIndex].competencies[competenceIndex] = {...competence};
    }
    return nextState;
}

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