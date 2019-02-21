export const DELETE_COMPETENCE_GROUP = 'DELETE_COMPETENCE_GROUPS';
export const CREATE_COMPETENCE_GROUP = 'CREATE_COMPETENCE_GROUP';

export const CREATE_COMPETENCE = 'CREATE_COMPETENCE';
export const DELETE_COMPETENCE = 'DELETE_COMPETENCE';

export const CHANGE_COMPETENCE = 'CHANGE_COMPETENCE';

export const SAVE_LOADED_COMPETENCE_GROUPS = 'SAVE_LOADED_COMPETENCE_GROUPS';

export const deleteCompetenceGroup = (competenceGroupId) => {
    return {
        type: DELETE_COMPETENCE_GROUP,
        payload: {
            id: competenceGroupId
        }
    };
}

export const createCompetenceGroup = (competenceGroupName) => {
    return {
        type: CREATE_COMPETENCE_GROUP,
        payload: {
            name: competenceGroupName
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

export const changeCompetence = (competenceGroupId, competenceId, indicators) => {
    return {
        type: CHANGE_COMPETENCE,
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