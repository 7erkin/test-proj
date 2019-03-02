import { Competence, CompetenceGroup, CompetenceStore } from "../../types/competence-page";
import { getRandomId } from "../../library";
import { 
    IDeleteCompetenceGroups, 
    ICreateCompetenceGroup, 
    ICreateCompetence, 
    IDeleteCompetence, 
    IUpdateCompetence, 
    ISaveLoadedCompetence
} from "../../types/action/competence";

export const DELETE_COMPETENCE_GROUPS = 'DELETE_COMPETENCE_GROUPS';
export const CREATE_COMPETENCE_GROUP = 'CREATE_COMPETENCE_GROUP';
export const CREATE_COMPETENCE = 'CREATE_COMPETENCE';
export const DELETE_COMPETENCE = 'DELETE_COMPETENCE';
export const UPDATE_COMPETENCE = 'UPDATE_COMPETENCE';
export const SAVE_LOADED_COMPETENCE_GROUPS = 'SAVE_LOADED_COMPETENCE_GROUPS';

export const deleteCompetenceGroups = (competenceGroupIds: Array<number>): IDeleteCompetenceGroups => {
    return {
        type: DELETE_COMPETENCE_GROUPS,
        payload: {
            ids: competenceGroupIds
        }
    };
}

export const createCompetenceGroup = (competenceGroup: CompetenceGroup): ICreateCompetenceGroup => {
    competenceGroup.id = getRandomId();
    return {
        type: CREATE_COMPETENCE_GROUP,
        payload: {
            competenceGroup
        }
    }
}

// indicators = new Map indicatorGroupId ---> indicatorsId
export const createCompetence = (competence: Competence, competenceGroupId: number): ICreateCompetence => {
    competence.id = getRandomId(); // mock response from server where we have to get id of competence
    return {
        type: CREATE_COMPETENCE,
        payload: {
            competence,
            competenceGroupId
        }
    }
}

export const deleteCompetence = (competenceId: number, competenceGroupId: number): IDeleteCompetence => {
    return {
        type: DELETE_COMPETENCE,
        payload: {
            competenceId,
            competenceGroupId
        }
    }
}

export const updateCompetence = (competence: Competence, competenceGroupId: number): IUpdateCompetence => {
    return {
        type: UPDATE_COMPETENCE,
        payload: {
            competence,
            competenceGroupId
        }
    }
}

export const saveLoadedCompetenceGroups = (loadedData: string): ISaveLoadedCompetence => {
    const store = CompetenceStore.fromStringToStore(CompetenceStore.transformAfterResponse(loadedData));
    return {
        type: SAVE_LOADED_COMPETENCE_GROUPS,
        payload: {
            competenceStore: store
        }
    }
}