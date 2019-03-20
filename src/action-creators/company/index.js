import * as declaredAction from '../../actions/company'

export const setActiveCompany = (companyId) => {
    return {
        type: declaredAction.SET_ACTIVE_COMPANY,
        payload: {
            id: companyId
        }
    };    
}

export const saveLoadedCompanies = (companies) => {
    return {
        type: declaredAction.SAVE_LOADED_COMPANIES,
        payload: {
            companies
        }
    }
}

export const saveLoadedVisibleCompanies = (companies) => {
    return {
        type: declaredAction.SAVE_LOADED_VISIBLE_COMPANIES,
        payload: {
            companies
        }
    }
}

export const startLoadingVisibleCompanies = () => {
    return {
        type: declaredAction.START_LOADING_COMPANIES
    }
}

export const finishLoadingVisibleCompanies = () => {
    return {
        type: declaredAction.FINISH_LOADING_COMPANIES
    }
}

// ==========
export const setEditCompany = (company) => {
    return {
        type: declaredAction.SET_EDIT_COMPANY,
        payload: {
            company
        }
    }
}

export const resetEditCompany = () => {
    return {
        type: declaredAction.RESET_EDIT_COMPANY
    }
}

export const setEditCompanyName = (name) => {
    return {
        type: declaredAction.SET_EDIT_COMPANY_NAME,
        payload: {
            name
        }
    }
}

export const setEditCompanyDescription = (description) => {
    return {
        type: declaredAction.SET_EDIT_COMPANY_DESCRIPTION,
        payload: {
            description
        }
    }
}

export const deletePointedAddedSubdivisions = () => {
    return {
        type: declaredAction.DELETE_POINTED_ADDED_SUBDIVISIONS
    }
}

export const deletePointedSubdivisions = () => {
    return {
        type: declaredAction.DELETE_POINTED_SUBDIVISIONS
    }
}

export const startDeletingSubdivisions = () => {
    return {
        type: declaredAction.START_DELETING_SUBDIVISIONS,
    }
}

export const finishDeletingSubdivisions = () => {
    return {
        type: declaredAction.FINISH_DELETING_SUBDIVISIONS
    }
}

export const saveUpdatedSubdivisions = (subdivisions) => {
    return {
        type: declaredAction.SAVE_UPDATED_SUBDIVISIONS,
        payload: {
            subdivisions
        }
    }
}

export const updatePointedSubdivisions = (id) => {
    return {
        type: declaredAction.UPDATE_POINTED_SUBDIVISIONS,
        payload: {
            id
        }
    }
}

// ==========


export const resetNewCompany = () => {
    return {
        type: declaredAction.RESET_NEW_COMPANY
    }
}

export const setNewCompanyName = (name) => {
    return {
        type: declaredAction.SET_NEW_COMPANY_NAME,
        payload: {
            name
        }
    }
}

export const setNewCompanyDescription = (description) => {
    return {
        type: declaredAction.SET_NEW_COMPANY_DESCIRPTION,
        payload: {
            description
        }
    }
}

export const deleteNewCompanySubdivisions = () => {
    return {
        type: declaredAction.DELETE_NEW_COMPANY_SUBDIVISIONS
    }
}

export const updateNewCompanyPointedSubdivisions = (id) => {
    return {
        type: declaredAction.UPDATE_NEW_COMPANY_POINTED_SUBDIVISIONS,
        payload: {
            id
        }
    }
}

// ==========

export const addSubdivisionsToCompany = () => {
    return {
        type: declaredAction.ADD_SUBDIVISIONS_TO_COPMANY
    }
}

export const updateSubdivisionName = name => {
    return {
        type: declaredAction.UPDATE_SUBDIVISION_NAME,
        payload: {
            name
        }
    }
}

export const updateSubdivisionDescription = description => {
    return {
        type: declaredAction.UPDATE_SUBDIVISION_DESCRIPTION,
        payload: {
            description
        }
    }
}

export const addSubdivision = () => {
    return {
        type: declaredAction.ADD_SUBDIVISION
    }
}

export const resetAddingSubdivision = () => {
    return {
        type: declaredAction.RESET_ADDING_SUBDIVISION
    }
}

export const deleteSubdivision = id => {
    return {
        type: declaredAction.DELETE_SUBDIVISION,
        payload: {
            id
        }
    }
}

export const leaveForm = () => {
    return {
        type: declaredAction.LEAVE_FORM
    }
}

// ===========

export const updateVisibleSubdivisionAddForm = () => {
    return {
        type: declaredAction.UPDATE_VISIBLE_SUBDIVISIONS_ADD_FORM
    }
}