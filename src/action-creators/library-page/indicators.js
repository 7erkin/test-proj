import {
    UPDATE_NEW_INDICATOR_NAME,
    UPDATE_NEW_INDICATOR_GROUP_ID,
    UPDATE_NEW_INDICATORS_GROUP_NAME,
    UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION,

    UPDATE_DELETED_INDICATORS,
    UPDATE_DELETED_INDICATORS_GROUPS,

    RESET_DELETED_INDICATORS,
    RESET_DELETED_INDICATORS_GROUPS,

    UPDATE_EDIT_INDICATOR_NAME,
    UPDATE_EDIT_INDICATOR_GROUP_ID,
    UPDATE_EDIT_INDICATORS_GROUP_NAME,
    UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION,

    SAVE_LOADED_INDICATORS,
    SAVE_LOADED_INDICATORS_GROUPS,

    START_LOADING_INDICATORS,
    FINISH_LOADING_INDICATORS
} from '../../actions/library-page/indicators'

export const startLoadingIndicators = () => {
    return {
        type: START_LOADING_INDICATORS
    }
}

export const finishLoadingIndicators = () => {
    return {
        type: FINISH_LOADING_INDICATORS
    }
}

// save
export const saveLoadedIndicators = indicators => {
    return {
        type: SAVE_LOADED_INDICATORS,
        value: indicators
    }
}
export const saveLoadedIndicatorsGroups = indicatorsGroups => {
    return {
        type: SAVE_LOADED_INDICATORS_GROUPS,
        value: indicatorsGroups
    }
}

// edit
export const updateEditIndicatorName = name => {
    return {
        type: UPDATE_EDIT_INDICATOR_NAME,
        value: name
    }
}
export const updateEditIndicatorGroupId = id => {
    return {
        type: UPDATE_EDIT_INDICATOR_GROUP_ID,
        value: id
    }
}
export const updateEditIndicatorsGroupName = name => {
    return {
        type: UPDATE_EDIT_INDICATORS_GROUP_NAME,
        value: name
    }
}
export const updateEditIndicatorsGroupDescription = description => {
    return {
        type: UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION,
        value: description
    }
}


// add
export const updateNewIndicatorsGroupName = name => {
    return {
        type: UPDATE_NEW_INDICATORS_GROUP_NAME,
        value: name
    }
}
export const updateNewIndicatorsGroupsDescription = description => {
    return {
        type: UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION,
        value: description
    }
}
export const updateNewIndicatorGroupId = id => {
    return {
        type: UPDATE_NEW_INDICATOR_GROUP_ID,
        value: id
    }
}
export const updateNewIndicatorName = name => {
    return {
        type: UPDATE_NEW_INDICATOR_NAME,
        value: name
    }
}

// delete
export const updateDeletedIndicators = id => {
    return {
        type: UPDATE_DELETED_INDICATORS,
        value: id
    }
}

export const updateDeletedIndicatorsGroups = id => {
    return {
        type: UPDATE_DELETED_INDICATORS_GROUPS,
        value: id
    }
}

export const resetDeletedIndicators = () => {
    return {
        type: RESET_DELETED_INDICATORS
    }
}

export const resetDeletedIndicatorsGroups = () => {
    return {
        type: RESET_DELETED_INDICATORS_GROUPS
    }
}