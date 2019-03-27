import {pointedEntityAction} from '../../actions/competence'

export const resetCompetenceGroupsForDelete = () => {
    return {
        type: pointedEntityAction.RESET_COMPETENCE_GROUPS_FOR_DELETE
    }
}

export const resetCompetenciesForDelete = () => {
    return {
        type: pointedEntityAction.RESET_COMPETENCIES_FOR_DELETE
    }
}

export const updateCompetenceGroupsForDelete = (id) => {
    return {
        type: pointedEntityAction.UPDATE_COMPETENCE_GROUPS_FOR_DELETE,
        payload: {
            id
        }
    }
}

export const updateCompetenciesForDelete = (id) => {
    return {
        type: pointedEntityAction.UPDATE_COMPETENCIES_FOR_DELETE,
        payload: {
            id
        }
    }
}