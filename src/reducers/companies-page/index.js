import * as action from '../../actions/companies-page'

const {
    UPDATE_SEARCH_COMPANY_BAR,
    PREPARE_LOADING_COMPANIES,
    FINISH_LOADING_COMPANIES,
    SAVE_LOADED_COMPANIES
} = action;

const updateSearchCompanyName = (state, {value}) => {
    const nextVisibleCompanies = state.companies
        .slice()
        .filter(el => el.name.toUpperCase().indexOf(value.toUpperCase()) !== -1)

    return {
        ...state,
        searchCompanyName: value,
        visibleCompanies: nextVisibleCompanies
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
        companies: value,
        visibleCompanies: value
    }
}

const initialState = {
    searchCompanyName: '',
    loadingCompanies: false,
    companies: [],
    visibleCompanies: []
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_SEARCH_COMPANY_BAR:
            return updateSearchCompanyName(state, payload);
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