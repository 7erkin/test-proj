import {
    UPDATE_COMPANY_ID,
    UPDATE_DESCRIPTION,
    UPDATE_POSITION_ID,
    UPDATE_REQUEST_DATE,
    UPDATE_SUBDIVISION_ID,
    PREPARE_LOADING_COMPANIES,
    PREPARE_LOADING_POSITIONS,
    PREPARE_LOADING_SUBDIVISIONS,
    FINISH_LOADING_COMPANIES,
    FINISH_LOADING_POSITIONS,
    FINISH_LOADING_SUBDIVISIONS,
    SAVE_LOADED_COMPAIES,
    SAVE_LOADED_POSITIONS,
    SAVE_LOADED_SUBDIVISIONS,
    RESET
} from '../../actions/new-request-page'

const prepareLoadingCompanies = () => {
    return {
        type: PREPARE_LOADING_COMPANIES
    }
}

const prepareLoadingSubdivisions = () => {
    return {
        type: PREPARE_LOADING_SUBDIVISIONS
    }
}

const prepareLoadingPositions = () => {
    return {
        type: PREPARE_LOADING_POSITIONS
    }
}

const finishLoadingCompanies = () => {
    return {
        type: FINISH_LOADING_COMPANIES
    }
}

const finishLoadingSubdivisions = () => {
    return {
        type: FINISH_LOADING_SUBDIVISIONS
    }
}

const finishLoadingPositions = () => {
    return {
        type: FINISH_LOADING_POSITIONS
    }
}

const saveLoadedCompanies = (companies) => {
    return {
        type: SAVE_LOADED_COMPAIES,
        payload: {
            value: companies
        }
    }
}

const saveLoadedSubdivisions = (subdivisions) => {
    return {
        type: SAVE_LOADED_SUBDIVISIONS,
        payload: {
            value: subdivisions
        }
    }
}

const saveLoadedPositions = (positions) => {
    return {
        type: SAVE_LOADED_POSITIONS,
        payload: {
            value: positions
        }
    }
}

const updateRequestDate = nextDate => {
    return {
        type: UPDATE_REQUEST_DATE,
        payload: {
            value: nextDate
        }
    }
}

const updateCompany = companyId => {
    return {
        type: UPDATE_COMPANY_ID,
        payload: {
            value: companyId
        }
    }
}

const updateSubdivision = subdivisionId => {
    return {
        type: UPDATE_SUBDIVISION_ID,
        payload: {
            value: subdivisionId
        }
    }
}

const updatePosition = positionId => {
    return {
        type: UPDATE_POSITION_ID,
        payload: {
            value: positionId
        }
    }
}

const updateDescription = nextDescription => {
    return {
        type: UPDATE_DESCRIPTION,
        payload: {
            value: nextDescription
        }
    }
}

const resetNewRequestForm = () => {
    return {
        type: RESET
    }
}

export {
    updateCompany,
    updateDescription,
    updateSubdivision,
    updatePosition,
    updateRequestDate,
    prepareLoadingCompanies,
    prepareLoadingSubdivisions,
    prepareLoadingPositions,
    saveLoadedCompanies,
    saveLoadedSubdivisions,
    saveLoadedPositions,
    finishLoadingCompanies,
    finishLoadingSubdivisions,
    finishLoadingPositions,
    resetNewRequestForm
}