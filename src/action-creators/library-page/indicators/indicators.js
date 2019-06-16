import { UPDATE_VISIBLE_INDICATORS, UPDATE_VISIBLE_INDICATORS_GROUPS, INDICATORS_GROUPS_DELETED, SAVE_LOADED_INDICATORS, SAVE_LOADED_INDICATORS_GROUPS, UPDATE_DELETED_INDICATORS, RESET_DELETED_INDICATORS, UPDATE_DELETED_INDICATORS_GROUPS, RESET_DELETED_INDICATORS_GROUPS } from '../../../actions/library-page/indicators/indicators'

export const updateVisibleIndicators = pattern => {
    return {
        type: UPDATE_VISIBLE_INDICATORS,
        value: pattern
    }
}
export const updateVisibleIndicatorsGroups = pattern => {
    return {
        type: UPDATE_VISIBLE_INDICATORS_GROUPS,
        value: pattern
    }
}
export const indicatorsGroupsDeleted = () => {
    return {
        type: INDICATORS_GROUPS_DELETED
    }
}
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