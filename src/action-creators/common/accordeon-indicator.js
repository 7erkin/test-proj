import {AccordeonIndicatorAction} from '../../actions/common'

const {
    SAVE_LOADED_INDICATORS,
    SAVE_LOADED_INDICATOR_GROUPS,
    START_LOADING_INDICATORS,
    START_LOADING_INDICATOR_GROUPS,
    FINISH_LOADING_INDICATORS,
    FINISH_LOADING_INDICATOR_GROUPS,
    SET_ACTIVE_INDICATOR_GROUP
} = AccordeonIndicatorAction;

const saveLoadedIndicators = (indicators) => {
    return {
        type: SAVE_LOADED_INDICATORS,
        payload: {
            indicators
        }
    }
}

const saveLoadedIndicatorGroups = (indicatorGroups) => {
    return {
        type: SAVE_LOADED_INDICATOR_GROUPS,
        payload: {
            indicatorGroups
        }
    }
}

const startLoadingIndicators = () => {
    return {
        type: START_LOADING_INDICATORS
    }
}

const startLoadingIndicatorGroups = () => {
    return {
        type: START_LOADING_INDICATOR_GROUPS
    }
}

const finishLoadingIndicators = () => {
    return {
        type: FINISH_LOADING_INDICATORS
    }
}

const finishLoadingIndicatorGroups = () => {
    return {
        type: FINISH_LOADING_INDICATOR_GROUPS
    }
}

const setActiveIndicatorGroup = (id) => {
    return {
        type: SET_ACTIVE_INDICATOR_GROUP,
        payload: {
            id
        }
    }
}

export {
    saveLoadedIndicatorGroups,
    saveLoadedIndicators,
    startLoadingIndicatorGroups,
    startLoadingIndicators,
    finishLoadingIndicatorGroups,
    finishLoadingIndicators,
    setActiveIndicatorGroup
}