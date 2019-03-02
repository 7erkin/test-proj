import {
    DELETE_COMPETENCE_GROUPS,
    CREATE_COMPETENCE_GROUP,
    CREATE_COMPETENCE,
    DELETE_COMPETENCE,
    UPDATE_COMPETENCE,
    SAVE_LOADED_COMPETENCE_GROUPS
} from '../actions/competence'
import { CompetenceStore } from '../../types/competence-page';
import { 
    IDeleteCompetenceGroups, 
    ICreateCompetenceGroup, 
    ICreateCompetence, 
    IDeleteCompetence, 
    IUpdateCompetence, 
    ISaveLoadedCompetence 
} from '../../types/action/competence';
import IAction from '../../types/action';

const deleteCompetenceGroupsReducer = (state: CompetenceStore, action: IDeleteCompetenceGroups): CompetenceStore => {
    //const nextState = state.filter(competenceGroup => action.payload.ids.findIndex(id => id == competenceGroup.id) === -1);
    const nextState = CompetenceStore.copy(state);
    nextState.deleteCompetenceGroups(action.payload.ids);
    return nextState;
}

const createCompetenceGroupReducer = (state: CompetenceStore, action: ICreateCompetenceGroup): CompetenceStore => {
    const nextState = CompetenceStore.copy(state);
    nextState.createCompetenceGroup(action.payload.competenceGroup);
    return nextState;
}

const createCompetenceReducer = (state: CompetenceStore, action: ICreateCompetence): CompetenceStore => {
    const nextState = CompetenceStore.copy(state);
    nextState.createCompetence(action.payload.competence, action.payload.competenceGroupId);
    return nextState;
}   

const deleteCompetenceReducer = (state: CompetenceStore, action: IDeleteCompetence): CompetenceStore => {
    const nextState = CompetenceStore.copy(state);
    debugger;
    nextState.deleteCompetence(action.payload.competenceId, action.payload.competenceGroupId);
    return nextState;
}

const updateCompetenceReducer = (state: CompetenceStore, action: IUpdateCompetence): CompetenceStore => {
    const nextState = CompetenceStore.copy(state);
    nextState.updateCompetence(action.payload.competence, action.payload.competenceGroupId);
    return nextState;
}

const saveLoadedCompetenceGroupsReducer = (state: CompetenceStore, action: ISaveLoadedCompetence): CompetenceStore => {
    return action.payload.competenceStore;
}

const initialState = new CompetenceStore({});

const rootReducer = (state: CompetenceStore = initialState, action: IAction): CompetenceStore => {
    switch(action.type){
        case CREATE_COMPETENCE_GROUP:
            return createCompetenceGroupReducer(state, action as ICreateCompetenceGroup);
        case DELETE_COMPETENCE_GROUPS:
            return deleteCompetenceGroupsReducer(state, action as IDeleteCompetenceGroups);
        case CREATE_COMPETENCE:
            return createCompetenceReducer(state, action as ICreateCompetence);
        case DELETE_COMPETENCE:
            return deleteCompetenceReducer(state, action as IDeleteCompetence);
        case UPDATE_COMPETENCE:
            return updateCompetenceReducer(state, action as IUpdateCompetence);
        case SAVE_LOADED_COMPETENCE_GROUPS:
            return saveLoadedCompetenceGroupsReducer(state, action as ISaveLoadedCompetence);
        default:
            return state;
    }
}

export default rootReducer;