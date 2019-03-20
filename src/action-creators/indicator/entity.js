import {entityAction} from '../../actions/indicator'

const saveIndicatorGroups = (indicatorGroups) => {
    return {
        type: entityAction.SAVE_INDICATOR_GROUPS,
        payload: {
            indicatorGroups
        }
    }
}

const resetIndicatorGroups = () => {
    return {
        type: entityAction.RESET_INDICATOR_GROUPS
    }
}

const saveIndicators = (indicators) => {
    return {
        type: entityAction.SAVE_INDICATORS,
        payload: {
            indicators
        }
    }
}

const resetIndicators = () => {
    return {
        type: entityAction.RESET_INDICATORS
    }
}

const setActiveIndicatorGroupId = (id) => {
    return {
        type: entityAction.SET_ACTIVE_INDICATOR_GROUP_ID,
        payload: {
            id
        }
    }
}

const resetActiveIndicatorGroupId = () => {
    return {
        type: entityAction.RESET_ACTIVE_INDICATOR_GROUP_ID
    }
}

export {
    saveIndicatorGroups,
    saveIndicators,
    resetActiveIndicatorGroupId,
    resetIndicatorGroups,
    resetIndicators,
    setActiveIndicatorGroupId
}