import {visibleAction} from '../../actions/competence'

export const setAddCompetenceFormVisible = (status) => {
    return {
        type: visibleAction.SET_ADD_COMPETENCE_FORM_VISIBLE,
        payload: {
            status
        }
    }
}

export const setAddCompetenceGroupFormVisible = (status) => {
    return {
        type: visibleAction.SET_ADD_COMPETENCE_GROUP_FORM_VISIBLE,
        payload: {
            status
        }
    }
}

export const setEditCompetenceFormVisible = (status) => {
    return {
        type: visibleAction.SET_EDIT_COMPETENCE_FORM_VISIBLE,
        payload: {
            status
        }
    }
}

export const setEditCompetenceGroupFormVisible = (status) => {
    return {
        type: visibleAction.SET_EDIT_COMPETENCE_GROUP_FORM_VISIBLE,
        payload: {
            status
        }
    }
}