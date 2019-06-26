import { 
    UPDATE_VISIBLE_COMPANIES,
    SAVE_LOADED_COMPANIES, 
    UPDATE_DELETED_COMPANIES,
    RESET_DELETED_COMPANIES,
    COMPANIES_DELETED
} from "../../actions/companies-page/companies-list"


export const updateVisibleCompanies = (pattern) => {
    return {
        type: UPDATE_VISIBLE_COMPANIES,
        value: pattern
    }
}

export const saveLoadedCompanies = companies => {
    return {
        type: SAVE_LOADED_COMPANIES,
        value: companies
    }
}

export const updateDeletedCompanies = id => {
    return {
        type: UPDATE_DELETED_COMPANIES,
        value: id
    }
}

export const resetDeletedCompanies = () => {
    return {
        type: RESET_DELETED_COMPANIES
    }
}

export const companiesDeleted = () => {
    return {
        type: COMPANIES_DELETED
    }
}