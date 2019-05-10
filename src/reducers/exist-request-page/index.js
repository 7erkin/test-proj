import {
    SAVE_LOADED_REQUEST,
    SWITCH_TAB,
    SAVE_LOADED_CANDIDATES,
    PREPARE_LOADING_CANDIDATES,
    FINISH_LOADING_CANDIDATES
} from '../../actions/exist-request-page'

const initialState = {
    request: null,
    tab: '',
    candidates: [],
    loadingCandidates: false
}

const saveLoadedRequest = (state, {value}) => {
    return {
        ...state,
        request: value
    }
}

const switchTab = (state, {value}) => {
    return {
        ...state,
        tab: value
    }
}

const saveLoadedCandidates = (state, {value}) => {
    return {
        ...state,
        candidates: value
    }
}

const prepareLoadingCandidates = (state) => {
    return {
        ...state, 
        loadingCandidates: true
    }
}

const finishLoadingCandidates = (state) => {
    return {
        ...state, 
        loadingCandidates: false
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case SAVE_LOADED_REQUEST:
            return saveLoadedRequest(state, payload);
        case SWITCH_TAB:
            return switchTab(state, payload);
        case SAVE_LOADED_CANDIDATES:
            return saveLoadedCandidates(state, payload);
        case PREPARE_LOADING_CANDIDATES:
            return prepareLoadingCandidates(state);
        case FINISH_LOADING_CANDIDATES:
            return finishLoadingCandidates(state);
        default:
            return state;
    }
}