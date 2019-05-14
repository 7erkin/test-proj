import {
    UPDATE_COMPANY_NAME,
    UPDATE_COMPANY_ADDRESS,
    UPDATE_SUBDIVISION_NAME,
    ADD_ONE_MORE_SUBDIVISION,
    SENDING_FORM,
    RESET
} from '../../actions/new-company-page'

const updateCompanyName = (nextName) => {
    return {
        type: UPDATE_COMPANY_NAME,
        payload: {
            value: nextName
        }
    }
}

const updateCompanyAddress = (nextAddress) => {
    return {
        type: UPDATE_COMPANY_ADDRESS,
        payload: {
            value: nextAddress
        }
    }
}

const updateSubdivisionName = (nextName) => {
    return {
        type: UPDATE_SUBDIVISION_NAME,
        payload: {
            value: nextName
        }
    }
}

const addOneMoreSubdivision = () => {
    return {
        type: ADD_ONE_MORE_SUBDIVISION
    }
}

const resetNewCompanyForm = () => {
    return {
        type: RESET
    }
}

const prepareSendingForm = () => {
    return {
        type: SENDING_FORM
    }
}

export {
    updateCompanyName,
    updateCompanyAddress,
    updateSubdivisionName,
    addOneMoreSubdivision,
    resetNewCompanyForm,
    prepareSendingForm
}