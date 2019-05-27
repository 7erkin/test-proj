import {
    UPDATE_NEW_COMPETENCE_NAME,
    UPDATE_NEW_COMPETENCE_GROUP_ID,
    UPDATE_NEW_COMPETENCIES_GROUP_NAME,
    UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION,

    UPDATE_DELETED_COMPETENCIES,
    UPDATE_DELETED_COMPETENCIES_GROUPS,

    RESET_DELETED_COMPETENCIES,
    RESET_DELETED_COMPETENCIES_GROUPS,

    UPDATE_EDIT_COMPETENCE_NAME,
    UPDATE_EDIT_COMPETENCE_GROUP_ID,
    UPDATE_EDIT_COMPETENCIES_GROUP_NAME,
    UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION,

    SAVE_LOADED_COMPETENCIES,
    SAVE_LOADED_COMPETENCIES_GROUPS,

    START_LOADING_COMPETENCIES,
    FINISH_LOADING_COMPETENCIES,

    NEW_COMPETENCIES_GROUP_SAVED,
    NEW_COMPETENCE_SAVED,
    EDIT_COMPETENCIES_GROUP_SAVED,
    EDIT_COMPETENCE_SAVED,

    COMPETENCIES_GROUPS_DELETED
} from '../../actions/library-page/competencies'

// savings
export const competenciesGroupsDeleted = () => {
    return {
        type: COMPETENCIES_GROUPS_DELETED
    }
}
export const newCompetenciesGroupSaved = () => {
    return {
        type: NEW_COMPETENCIES_GROUP_SAVED
    }
}
export const newCompetenceSaved = () => {
    return {
        type: NEW_COMPETENCE_SAVED
    }
}
export const editCompetenciesGroupSaved = () => {
    return {
        type: EDIT_COMPETENCIES_GROUP_SAVED
    }
}
export const editCompetenceSaved = () => {
    return {
        type: EDIT_COMPETENCE_SAVED
    }
}

//loading
export const startLoadingCompetencies = () => {
    return {
        type: START_LOADING_COMPETENCIES
    }
}
export const finishLoadingCompetencies = () => {
    return {
        type: FINISH_LOADING_COMPETENCIES
    }
}

// save
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

// edit
export const updateEditCompetenceName = name => {
    return {
        type: UPDATE_EDIT_COMPETENCE_NAME,
        value: name
    }
}

export const updateEditCompetenceIdGroup = id => {
    return {
        type: UPDATE_EDIT_COMPETENCE_GROUP_ID,
        value: id
    }
}
export const updateEditCompetenciesGroupName = name => {
    return {
        type: UPDATE_EDIT_COMPETENCIES_GROUP_NAME,
        value: name
    }
}
export const updateEditCompetenciesGroupDescription = description => {
    return {
        type: UPDATE_EDIT_COMPETENCIES_GROUP_DESCRIPTION,
        value: description
    }
}


// add
export const updateNewCompetenciesGroupName = name => {
    return {
        type: UPDATE_NEW_COMPETENCIES_GROUP_NAME,
        value: name
    }
}
export const updateNewCompetenciesGroupsDescription = description => {
    return {
        type: UPDATE_NEW_COMPETENCIES_GROUP_DESCRIPTION,
        value: description
    }
}
export const updateNewCompetenceIdGroup = id => {
    return {
        type: UPDATE_NEW_COMPETENCE_GROUP_ID,
        value: id
    }
}
export const updateNewCompetenceName = name => {
    return {
        type: UPDATE_NEW_COMPETENCE_NAME,
        value: name
    }
}

// delete
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