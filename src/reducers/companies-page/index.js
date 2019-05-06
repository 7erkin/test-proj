import * as action from '../../actions/companies-page'

const {
    UPDATE_SEARCH_COMPANY_BAR,
    PREPARE_LOADING_COMPANIES,
    FINISH_LOADING_COMPANIES,
    SAVE_LOADED_COMPANIES
} = action;

const updateSearchCompanyBar = (state, payload) => {
    return {
        ...state,
        searchCompanyPattern: payload.value
    }
}

const prepareLoadingCompanies = (state, payload) => {
    return {
        ...state,
        loadingCompanies: true
    }
}

const finishLoadingCompanies = (state, payload) => {
    return {
        ...state,
        loadingCompanies: false
    }
}

const saveLoadedCompanies = (state, {value}) => {
    return {
        ...state,
        companies: value
    }
}

const initialState = {
    searchCompanyPattern: '',
    loadingCompanies: false,
    companies: []
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_SEARCH_COMPANY_BAR:
            return updateSearchCompanyBar(state, payload);
        case PREPARE_LOADING_COMPANIES:
            return prepareLoadingCompanies(state, payload);
        case FINISH_LOADING_COMPANIES:
            return finishLoadingCompanies(state, payload);
        case SAVE_LOADED_COMPANIES:
            return saveLoadedCompanies(state, payload);
        default:
            return state;
    }
}