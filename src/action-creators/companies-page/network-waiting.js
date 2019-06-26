import { 
    START_LOADING_COMPANIES, 
    FINISH_LOADING_COMPANIES, 
    START_SAVING_NEW_COMPANY,
    FINISH_SAVING_NEW_COMPANY,
    START_DELETING_COMPANIES,
    FINISH_DELETING_COMPANIES
} from "../../actions/companies-page/network-waiting";

export const startLoadingCompanies = () => {
    return {
        type: START_LOADING_COMPANIES
    }
}

export const finishLoadingCompanies = () => {
    return {
        type: FINISH_LOADING_COMPANIES
    }
}

export const startSavingNewCompany = () => {
    return {
        type: START_SAVING_NEW_COMPANY
    }
}

export const finishSavingNewCompany = () => {
    return {
        type: FINISH_SAVING_NEW_COMPANY
    }
}

export const startDeletingCompanies = () => {
    return {
        type: START_DELETING_COMPANIES
    }
}

export const finishDeletingCompanies = () => {
    return {
        type: FINISH_DELETING_COMPANIES
    }
}