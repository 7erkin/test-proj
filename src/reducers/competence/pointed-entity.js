import {pointedEntityAction} from '../../actions/competence'

const initialState = {
    competenciesForDelete: [],
    competenceGroupsForDelete: [],
}

const resetCompetenceGroupsForDelete = (state, action) => {
    return {
        ...state,
        competenceGroupsForDelete: []
    }
}

const resetCompetenciesForDelete = (state, action) => {
    return {
        ...state,
        competencies: []
    }
}

const updateCompetenceGroupsForDelete = (state, action) => {
    const competenceGroupsForDelete = state.competenceGroupsForDelete.slice();
    const index = competenceGroupsForDelete.findIndex(el => el == action.payload.id);
    
    if(index == -1) 
        competenceGroupsForDelete.push(action.payload.id);
    else    
        competenceGroupsForDelete.splice(index, 1);

    return {
        ...state,
        competenceGroupsForDelete 
    }
}

const updateCompetenciesForDelete = (state, action) => {
    const competenciesForDelete = state.competenciesForDelete.slice();
    const index = competenciesForDelete.findIndex(el => el == action.payload.id);
    
    if(index == -1) 
        competenciesForDelete.push(action.payload.id);
    else    
        competenciesForDelete.splice(index, 1);

    return {
        ...state,
        competenciesForDelete 
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case pointedEntityAction.RESET_COMPETENCE_GROUPS_FOR_DELETE:
            return resetCompetenceGroupsForDelete(state, action);
        case pointedEntityAction.RESET_COMPETENCIES_FOR_DELETE:
            return resetCompetenciesForDelete(state, action);
        case pointedEntityAction.UPDATE_COMPETENCE_GROUPS_FOR_DELETE:
            return updateCompetenceGroupsForDelete(state, action);
        case pointedEntityAction.UPDATE_COMPETENCIES_FOR_DELETE:
            return updateCompetenciesForDelete(state, action);
        default:
            return state;
    }    
}
    
    export default rootReducer;