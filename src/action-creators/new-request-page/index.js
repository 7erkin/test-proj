import * as action from '../../actions/new-request-page'

const updateRequestDate = nextDate => {
    return {
        type: action.UPDATE_REQUEST_DATE,
        payload: {
            value: nextDate
        }
    }
}

const updateCompany = companyId => {
    return {
        type: action.UPDATE_COMPANY_ID,
        payload: {
            value: companyId
        }
    }
}

const updateSubdivision = subdivisionId => {
    return {
        type: action.UPDATE_SUBDIVISION_ID,
        payload: {
            value: subdivisionId
        }
    }
}

const updatePosition = positionId => {
    return {
        type: action.UPDATE_POSITION_ID,
        payload: {
            value: positionId
        }
    }
}

const updateDescription = nextDescription => {
    return {
        type: action.UPDATE_DESCRIPTION,
        payload: {
            value: nextDescription
        }
    }
}

const resetNewRequestForm = () => {
    return {
        type: action.RESET
    }
}

export {
    updateCompany,
    updateDescription,
    updateSubdivision,
    updatePosition,
    updateRequestDate,
    resetNewRequestForm
}