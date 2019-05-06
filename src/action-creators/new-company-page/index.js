import * as action from '../../actions/new-company-page'

const updateCompanyName = (nextName) => {
    return {
        type: action.UPDATE_COMPANY_NAME,
        payload: {
            value: nextName
        }
    }
}

const updateCompanyAddress = (nextAddress) => {
    return {
        type: action.UPDATE_COMPANY_ADDRESS,
        payload: {
            value: nextAddress
        }
    }
}

const updateSubdivisionName = (nextName) => {
    return {
        type: action.UPDATE_SUBDIVISION_NAME,
        payload: {
            value: nextName
        }
    }
}

export {
    updateCompanyName,
    updateCompanyAddress,
    updateSubdivisionName
}