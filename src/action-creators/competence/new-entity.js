import {newEntityAction} from '../../actions/competence'

export const updateNewCompetenceName = (name) => {
    return {
        type: newEntityAction.UPDATE_NEW_COMPETENCE_NAME,
        payload: {
            name
        }
    }
}

export const updateNewCompetenceDescription = (description) => {
    return {
        type: newEntityAction.UPDATE_NEW_COMPETENCE_DESCRIPTION,
        payload: {
            description
        }
    }
}

export const updateNewCompetenceIndicators = (id, name, groupId) => {
    return {
        type: newEntityAction.UPDATE_NEW_COMPETENCE_INDICATORS,
        payload: {
            id,
            name,
            groupId
        }
    }
}

export const updateNewCompetenceIndicatorInfluence = (id, influence) => {
    return {
        type: newEntityAction.UPDATE_NEW_COMPETENCE_INDICATOR_INFLUENCE,
        payload: {
            id, 
            influence
        }
    }
}

export const resetNewCompetence = () => {
    return {
        type: newEntityAction.RESET_NEW_COMPETENCE
    }
}

export const updateNewCompetenceGroupName = (name) => {
    return {
        type: newEntityAction.UPDATE_NEW_COMPETENCE_GROUP_NAME,
        payload: {
            name
        }
    }
}

export const updateNewCompetenceGroupDescription = (description) => {
    return {
        type: newEntityAction.UPDATE_NEW_COMPETENCE_GROUP_DESCRIPTION,
        payload: {
            description
        }
    }
}

export const updateNewCompetenceGroupId = id => {
    return {
        type: newEntityAction.UPDATE_NEW_COMPETENCE_GROUP_ID,
        payload: {
            id
        }
    }
}

export const resetNewCompetenceGroup = () => {
    return {
        type: newEntityAction.RESET_NEW_COMPETENCE_GROUP
    }
}