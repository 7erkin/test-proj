import * as declaredAction from '../../actions/competence'

export const startLoadingCompetencies = () => {
    return {
        type: declaredAction.START_LOADING_COMPETENCIES
    }
}

export const startLoadingCompetenceGroups = () => {
    return {
        type: declaredAction.START_LOADING_COMPETENCE_GROUPS
    }
}

export const finishLoadingCompetencies = () => {
    return {
        type: declaredAction.FINISH_LOADING_COMPETENCIES
    }
}

export const finishLoadingCompetenceGroups = () => {
    return {
        type: declaredAction.FINISH_LOADING_COMPETENCE_GROUPS
    }
}

export const setActiveCompetenceGroup = (competenceGroupId) => {
    return {
        type: declaredAction.SET_ACTIVE_COMPETENCE_GROUP
    }
}

export const saveLoadedCompetencies = (competencies) => {
    return {
        type: declaredAction.SAVE_LOADED_COMPETENCIES,
        payload: {
            competencies
        }
    }
}

export const saveLoadedCompetenceGroups = (comeptenceGroups) => {
    return {
        type: declaredAction.SAVE_LOADED_COMPETENCE_GROUPS,
        payload: {
            competenceGroups
        }
    }
}

export const pointCompetenceOutForDelete = (competenceId) => {
    return {
        type: declaredAction.POINT_COMPETENCE_OUT_FOR_DELETE,
        payload: {
            id: competenceId
        }
    }
}

export const pointCompetenceGroupOutForDelete = (competenceGroupId) => {
    return {
        type: declaredAction.POINT_COMPETENCE_GROUP_OUT_FOR_DELETE,
        payload: {
            id: competenceGroupId
        }
    }
}

export const resetPointedCompetenciesForDelete = () => {
    return {
        type: declaredAction.RESET_POINTED_COMPETENCIES
    }
}

export const resetPointedCompetenceGroupsForDelete = () => {
    return {
        type: declaredAction.RESET_POINTED_COMPETENCE_GROUPS
    }
}