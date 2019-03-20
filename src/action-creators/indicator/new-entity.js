import {newEntityAction} from '../../actions/indicator'

const updateNewIndicatorName = (name) => {
    return {
        type: newEntityAction.UPDATE_NEW_INDICATOR_NAME,
        payload: {
            name
        }
    }
}
const updateNewIndicatorGroupId = (id) => {
    return {
        type: newEntityAction.UPDATE_NEW_INDICATOR_GROUP_ID,
        payload: {
            id
        }
    }
}
const resetNewIndicator = () => {
    return {
        type: newEntityAction.RESET_NEW_INDICATOR
    }
}

const updateNewIndicatorGroupName = (name) => {
    return {
        type: newEntityAction.UPDATE_NEW_INDICATOR_GROUP_NAME,
        payload: {
            name
        }
    }
}
const updateNewIndicatorGroupDescription = (description) => {
    return {
        type: newEntityAction.UPDATE_NEW_INDICATOR_GROUP_DESCRIPTION,
        payload: {
            description
        }
    }
}
const resetNewIndicatorGroup = () => {
    return {
        type: newEntityAction.RESET_NEW_INDICATOR_GROUP
    }
}

export {
    updateNewIndicatorGroupDescription,
    updateNewIndicatorGroupId,
    updateNewIndicatorGroupName,
    updateNewIndicatorName,
    resetNewIndicator,
    resetNewIndicatorGroup
}