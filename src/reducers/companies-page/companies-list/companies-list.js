
export const saveLoadedCompanies = (state, value) => {
    return {
        ...state,
        companies: value,
        visibleCompanies: value
    }
}

export const updateVisibleCompanies = (state, value) => {
    return {
        ...state,
        visibleCompanies: state.companies.filter(el => el.name.toUpperCase().indexOf(value.toUpperCase()) !== -1)
    }
}

export const updateDeletedCompanies = (state, value) => {
    const deletedCompanies = [...state.deletedCompanies];
    const index = deletedCompanies.findIndex(id => id == value);

    index === -1 ? deletedCompanies.push(value) : deletedCompanies.splice(index, 1);

    return {
        ...state,
        deletedCompanies
    }
}

export const resetDeletedCompanies = (state) => {
    return {
        ...state,
        deletedCompanies: []
    }
}

export const copmaniesDeleted = (state) => {
    return {
        ...state,
        deletedCompanies: []
    }
}