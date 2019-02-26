export const DELETE_COMPETENCE_GROUPS = 'DELETE_COMPETENCE_GROUPS';
export const CREATE_COMPETENCE_GROUP = 'CREATE_COMPETENCE_GROUP';

export const CREATE_COMPETENCE = 'CREATE_COMPETENCE';
export const DELETE_COMPETENCE = 'DELETE_COMPETENCE';

export const UPDATE_COMPETENCE = 'UPDATE_COMPETENCE';

export const SAVE_LOADED_COMPETENCE_GROUPS = 'SAVE_LOADED_COMPETENCE_GROUPS';

export const deleteCompetenceGroups = (competenceGroupIds) => {
    return {
        type: DELETE_COMPETENCE_GROUPS,
        payload: {
            ids: competenceGroupIds
        }
    };
}

export const createCompetenceGroup = (competenceGroupName, competenceGroupDescription) => {
    return {
        type: CREATE_COMPETENCE_GROUP,
        payload: {
            name: competenceGroupName,
            description: competenceGroupDescription
        }
    }
}

// indicators = new Map indicatorGroupId ---> indicatorsId
export const createCompetence = (competenceGroupId, competenceName, indicators) => {
    return {
        type: CREATE_COMPETENCE,
        payload: {
            name: competenceName,
            indicators
        }
    }
}

export const deleteCompetence = (competenceGroupId, competenceId) => {
    return {
        type: DELETE_COMPETENCE,
        payload: {
            id: competenceId
        }
    }
}

export const updateCompetence = (competenceGroupId, competenceId, indicators) => {
    return {
        type: UPDATE_COMPETENCE,
        payload: {
            competenceGroupId,
            competenceId,
            indicators
        }
    }
}

export const saveLoadedCompetenceGroups = competenceGroups => {
    return {
        type: SAVE_LOADED_COMPETENCE_GROUPS,
        payload: {
            competenceGroups: competenceGroups
        }
    }
}