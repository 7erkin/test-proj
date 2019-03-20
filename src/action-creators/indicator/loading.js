import {loadingAction} from '../../actions/indicator'

const setLoadingIndicators = (status) => {
    return {
        type: loadingAction.SET_LOADING_INDICATORS,
        payload: {
            status
        }
    }
}

const setLoadingIndicatorGroups = (status) => {
    return {
        type: loadingAction.SET_LOADING_INDICATOR_GROUPS,
        payload: {
            status
        }
    }
}

export {
    setLoadingIndicatorGroups,
    setLoadingIndicators
}