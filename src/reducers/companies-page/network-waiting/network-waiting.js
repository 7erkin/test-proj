
export const startLoadingCompanies = (state) => {
    return {
        ...state,
        loadingCompanies: true
    }
}

export const finishLoadingCompanies = (state) => {
    return {
        ...state,
        loadingCompanies: false
    }
}

export const startSavingNewCompany = (state) => {
    return {
        ...state,
        savingNewCompany: true
    }
}

export const finishSavingNewCompany = (state) => {
    return {
        ...state,
        savingNewCompany: false
    }
}

export const startDeletingCompanies = (state) => {
    return {
        ...state,
        deletingCompanies: true
    }
}

export const finishDeletingCompanies = (state) => {
    return {
        ...state,
        deletingCompanies: false
    }
}