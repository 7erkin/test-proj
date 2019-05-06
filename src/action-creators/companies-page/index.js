import * as action from '../../actions/companies-page'

const updateSearchCompanyBar = (pattern) => {
    return {
        type: action.UPDATE_SEARCH_COMPANY_BAR,
        payload: {
            value: pattern
        }
    }
}

const prepareLoadingCompanies = () => {
    return {
        type: action.PREPARE_LOADING_COMPANIES
    }
}

const finishLoadingCompanies = () => {
    return {
        type: action.FINISH_LOADING_COMPANIES
    }
}

const saveLoadedCompanies = (companies) => {
    return {
        type: action.SAVE_LOADED_COMPANIES,
        payload: {
            value: companies
        }
    }
}

export {
    updateSearchCompanyBar,
    prepareLoadingCompanies,
    finishLoadingCompanies,
    saveLoadedCompanies
}