import {
    UPDATE_SEARCH_COMPANY_BAR,
    PREPARE_LOADING_REQUESTS,
    FINISH_LOADING_REQUESTS,
    SAVE_LOADED_REQUESTS
} from '../../actions/requests-page'

const initialState = {
    searchCompanyName: '',
    loadingRequests: false,
    requests: [],
    visibleRequests: []
}

const updateSearchCompanyName = (state, {value}) => {
    const nextVisibleRequests = state.requests
        .slice()
        .filter(el => el.company.toUpperCase().indexOf(value.toUpperCase()) !== -1)

    return {
        ...state,
        searchCompanyName: value,
        visibleRequests: nextVisibleRequests
    }
}

const prepareLoadingRequests = (state, payload) => {
    return {
        ...state,
        loadingRequests: true
    }
}

const finishLoadingRequests = (state, payload) => {
    return {
        ...state,
        loadingRequests: false
    }
}

const saveLoadedRequests = (state, {value}) => {
    return {
        ...state,
        requests: value,
        visibleRequests: value
    }
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case UPDATE_SEARCH_COMPANY_BAR:
            return updateSearchCompanyName(state, payload);
        case PREPARE_LOADING_REQUESTS:
            return prepareLoadingRequests(state, payload);
        case FINISH_LOADING_REQUESTS:
            return finishLoadingRequests(state, payload);
        case SAVE_LOADED_REQUESTS:
            return saveLoadedRequests(state, payload);
        default:
            return state;
    }
}

export default rootReducer;