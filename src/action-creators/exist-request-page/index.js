import {
    SAVE_LOADED_REQUEST,
    SWITCH_TAB,
    SAVE_LOADED_CANDIDATES,
    PREPARE_LOADING_CANDIDATES,
    FINISH_LOADING_CANDIDATES
} from '../../actions/exist-request-page'

const saveLoadedRequest = (request) => {
    return {
        type: SAVE_LOADED_REQUEST,
        payload: {
            value: request
        }
    }
}

const switchTab = (nextTab) => {
    return {
        type: SWITCH_TAB,
        payload: {
            value: nextTab
        }
    }
}

const saveLoadedCandidates = (candidates) => {
    return {
        type: SAVE_LOADED_CANDIDATES,
        payload: {
            value: candidates
        }
    }
}

const prepareLoadingCandidates = () => {
    return {
        type: PREPARE_LOADING_CANDIDATES
    }
}

const finishLoadingCandidates = () => {
    return {
        type: FINISH_LOADING_CANDIDATES
    }
}

export {
    saveLoadedRequest,
    switchTab,
    saveLoadedCandidates,
    prepareLoadingCandidates,
    finishLoadingCandidates
}