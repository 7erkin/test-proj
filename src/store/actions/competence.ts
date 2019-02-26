import { Competence, CompetenceGroup } from "../../containers/Competencies/types";
import { getRandomId } from "../../library";

export const DELETE_COMPETENCE_GROUPS = 'DELETE_COMPETENCE_GROUPS';
export const CREATE_COMPETENCE_GROUP = 'CREATE_COMPETENCE_GROUP';

export const CREATE_COMPETENCE = 'CREATE_COMPETENCE';
export const DELETE_COMPETENCE = 'DELETE_COMPETENCE';

export const UPDATE_COMPETENCE = 'UPDATE_COMPETENCE';

export const SAVE_LOADED_COMPETENCE_GROUPS = 'SAVE_LOADED_COMPETENCE_GROUPS';

export const deleteCompetenceGroups = (competenceGroupIds: Array<number>) => {
    return {
        type: DELETE_COMPETENCE_GROUPS,
        payload: {
            ids: competenceGroupIds
        }
    };
}

export const createCompetenceGroup = (competenceGroup: CompetenceGroup) => {
    competenceGroup.id = getRandomId();
    return {
        type: CREATE_COMPETENCE_GROUP,
        payload: {
            competenceGroup
        }
    }
}

// indicators = new Map indicatorGroupId ---> indicatorsId
export const createCompetence = (competence: Competence, competenceGroupId: number) => {
    competence.id = getRandomId(); // mock response from server where we have to get id of competence
    return {
        type: CREATE_COMPETENCE,
        payload: {
            competence,
            competenceGroupId
        }
    }
}

export const deleteCompetence = (competenceId: number, competenceGroupId: number) => {
    return {
        type: DELETE_COMPETENCE,
        payload: {
            competenceId,
            competenceGroupId
        }
    }
}

export const updateCompetence = (competence: Competence, competenceGroupId: number) => {
    return {
        type: UPDATE_COMPETENCE,
        payload: {
            competence,
            competenceGroupId
        }
    }
}

export const saveLoadedCompetenceGroups = (competenceGroups: Array<CompetenceGroup>) => {
    return {
        type: SAVE_LOADED_COMPETENCE_GROUPS,
        payload: {
            competenceGroups: competenceGroups
        }
    }
}