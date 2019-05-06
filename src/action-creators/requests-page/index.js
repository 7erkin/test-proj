import {
    UPDATE_SEARCH_COMPANY_BAR,
    PREPARE_LOADING_REQUESTS,
    FINISH_LOADING_REQUESTS,
    SAVE_LOADED_REQUESTS
} from '../../actions/requests-page'

const updateSearchCompanyBar = (pattern) => {
    return {
        type: UPDATE_SEARCH_COMPANY_BAR,
        payload: {
            value: pattern
        }
    }
}

const prepareLoadingRequests = () => {
    return {
        type: PREPARE_LOADING_REQUESTS
    }
}

const finishLoadingRequests = () => {
    return {
        type: FINISH_LOADING_REQUESTS
    }
}

const saveLoadedRequests = (requests) => {
    return {
        type: SAVE_LOADED_REQUESTS,
        payload: {
            value: requests
        }
    }
}

export {
    updateSearchCompanyBar,
    prepareLoadingRequests,
    finishLoadingRequests,
    saveLoadedRequests
}
