import {editEntityAction} from '../../actions/indicator'

const setEditIndicator = (groupId, indicators, id) => {
    return {
        type: editEntityAction.SET_EDIT_INDICATOR,
        payload: {
            groupId,
            indicators,
            id
        }
    }
}

const updateEditIndicatorName = (name) => {
    return {
        type: editEntityAction.UPDATE_EDIT_INDICATOR_NAME,
        payload: {
            name
        }
    }
}

const updateEditIndicatorGroupId = (id) => {
    return {
        type: editEntityAction.UPDATE_EDIT_INDICATOR_GROUP_ID,
        payload: {
            id
        }
    }
}

const resetEditIndicator = () => {
    return {
        type: editEntityAction.RESET_EDIT_INDICATOR
    }
}

const setEditIndicatorGroup = (indicatorGroups, id) => {
    return {
        type: editEntityAction.SET_EDIT_INDICATOR_GROUP,
        payload: {
            indicatorGroups,
            id
        }
    }
}

const updateEditIndicatorGroupName = (name) => {
    return {
        type: editEntityAction.UPDATE_EDIT_INDICATOR_GROUP_NAME,
        payload: {
            name
        }
    }
}

const updateEditIndicatorGroupDescription = (description) => {
    return {
        type: editEntityAction.UPDATE_EDIT_INDICATOR_GROUP_DESCRIPTION,
        payload: {
            description
        }
    }
}

const resetEditIndicatorGroup = () => {
    return {
        type: editEntityAction.RESET_EDIT_INDICATOR_GROUP
    }
}

export {
    setEditIndicator,
    setEditIndicatorGroup,
    updateEditIndicatorGroupDescription,
    updateEditIndicatorGroupId,
    updateEditIndicatorGroupName,
    updateEditIndicatorName,
    resetEditIndicator,
    resetEditIndicatorGroup
}