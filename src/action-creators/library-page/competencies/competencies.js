import { 
    UPDATE_VISIBLE_COMPETENCIES, 
    UPDATE_VISIBLE_COMPETENCIES_GROUPS, 

    COMPETENCIES_GROUPS_DELETED, 
    COMPETENCIES_DELETED,

    SAVE_LOADED_COMPETENCIES, 
    SAVE_LOADED_COMPETENCIES_GROUPS,

    UPDATE_DELETED_COMPETENCIES, 
    UPDATE_DELETED_COMPETENCIES_GROUPS,

    RESET_DELETED_COMPETENCIES, 
    RESET_DELETED_COMPETENCIES_GROUPS 
} from '../../../actions/library-page/competencies/competencies'

export const updateVisibleCompetencies = (pattern) => {
    return {
        type: UPDATE_VISIBLE_COMPETENCIES,
        value: pattern
    }
}
export const updateVisibleCompetenciesGroups = (pattern) => {
    return {
        type: UPDATE_VISIBLE_COMPETENCIES_GROUPS,
        value: pattern
    }
}
export const competenciesGroupsDeleted = () => {
    return {
        type: COMPETENCIES_GROUPS_DELETED
    }
}
export const competenciesDeleted = () => {
    return {
        type: COMPETENCIES_DELETED
    }
}
export const saveLoadedCompetencies = COMPETENCIES => {
    return {
        type: SAVE_LOADED_COMPETENCIES,
        value: COMPETENCIES
    }
}
export const saveLoadedCompetenciesGroups = competenciesGroups => {
    return {
        type: SAVE_LOADED_COMPETENCIES_GROUPS,
        value: competenciesGroups
    }
}
export const updateDeletedCompetencies = id => {
    return {
        type: UPDATE_DELETED_COMPETENCIES,
        value: id
    }
}

export const updateDeletedCompetenciesGroups = id => {
    return {
        type: UPDATE_DELETED_COMPETENCIES_GROUPS,
        value: id
    }
}

export const resetDeletedCompetencies = () => {
    return {
        type: RESET_DELETED_COMPETENCIES
    }
}

export const resetDeletedCompetenciesGroups = () => {
    return {
        type: RESET_DELETED_COMPETENCIES_GROUPS
    }
}