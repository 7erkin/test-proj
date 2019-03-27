import {entityAction} from '../../actions/competence'

export const saveCompetenceGroups = (competenceGroups) => {
    return {
        type: entityAction.SAVE_COMPETENCE_GROUPS,
        payload: {
            competenceGroups
        }
    }
}

export const saveCompetencies = (competencies) => {
    return {
        type: entityAction.SAVE_COMPETENCIES,
        payload: {
            competencies
        }
    }
}

export const saveIndicatorGroups = (indicatorGroups) => {
    return {
        type: entityAction.SAVE_INDICATOR_GROUPS,
        payload: {
            indicatorGroups
        }
    }
}

export const saveIndicators = (indicators) => {
    return {
        type: entityAction.SAVE_INDICATORS,
        payload: {
            indicators
        }
    }
}

export const setEditCompetenceId = id => {
    return {
        type: entityAction.SET_EDIT_COMPETENCE_ID,
        payload: {
            id
        }
    }
}

export const resetCompetenceGroups = () => {
    return {
        type: entityAction.RESET_COMPETENCE_GROUP,
    }
}

export const resetCompetencies = () => {
    return {
        type: entityAction.RESET_COMPETENCIES,
    }
}

export const resetIndicatorGroups = () => {
    return {
        type: entityAction.RESET_INDICATOR_GROUPS,
    }
}

export const resetIndicators = () => {
    return {
        type: entityAction.RESET_INDICATORS,
    }
}

export const setActiveIndicatorGroupId = (id) => {
    return {
        type: entityAction.SET_ACTIVE_INDICATOR_GROUP_ID,
        payload: {
            id
        }
    }
}

export const resetActiveIndicatorGroupId = () => {
    return {
        type: entityAction.RESET_ACTIVE_INDICATOR_GROUP_ID
    }
}

export const setActiveCompetenceGroupId = (id) => {
    return {
        type: entityAction.SET_ACTIVE_COMPETENCE_GROUP_ID,
        payload: {
            id
        }
    }
}