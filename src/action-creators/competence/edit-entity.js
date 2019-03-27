import {editEntityAction} from '../../actions/competence'

export const setEditCompetence = (competencies, id, indicators, groupId) => {
    return {
        type: editEntityAction.SET_EDIT_COMPETENCE,
        payload: {
            competencies,
            id,
            indicators,
            groupId
        }
    }
}

export const setEditCompetenceGroup = (competenceGroups, id) => {
    return {
        type: editEntityAction.SET_EDIT_COMPETENCE_GROUP,
        payload: {
            id,
            competenceGroups
        }
    }
}

export const updateEditCompetenceDescription = (description) => {
    return {
        type: editEntityAction.UPDATE_EDIT_COMPETENCE_DESCRIPTION,
        payload: {
            description
        }
    }
}

export const updateEditCompetenceGroupDescription = (description) => {
    return {
        type: editEntityAction.UPDATE_EDIT_COMPETENCE_GROUP_DESCRIPTION,
        payload: {
            description
        }
    }
}

export const updateEditCompetenceGroupId = (id) => {
    return {
        type: editEntityAction.UPDATE_EDIT_COMPETENCE_GROUP_ID,
        payload: {
            id
        }
    }
}

export const updateEditCompetenceIndicators = (id, name, groupId) => {
    return {
        type: editEntityAction.UPDATE_EDIT_COMPETENCE_INDICATORS,
        payload: {
            id,
            name, 
            groupId
        }
    }
}

export const updateEditCompetenceIndicatorInfluence = (id, influence) => {
    return {
        type: editEntityAction.UPDATE_EDIT_COMPETENCE_INDICATOR_INFLUENCE,
        payload: {
            id,
            influence
        }
    }
}

export const updateEditCompetenceGroupName = (name) => {
    return {
        type: editEntityAction.UPDATE_EDIT_COMPETENCE_GROUP_NAME,
        payload: {
            name
        }
    }
}

export const updateEditCompetenceName = (name) => {
    return {
        type: editEntityAction.UPDATE_EDIT_COMPETENCE_NAME,
        payload: {
            name
        }
    }
}

export const resetEditCompetence = () => {
    return {
        type: editEntityAction.RESET_EDIT_COMPETENCE,
    }
}

export const resetEditCompetenceGroup = () => {
    return {
        type: editEntityAction.RESET_EDIT_COMPETENCE_GROUP,
    }
}