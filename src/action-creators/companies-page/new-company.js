import { 
    UPDATE_NEW_COMPANY_NAME, 
    UPDATE_NEW_COMPANY_ADDRESS, 
    NEW_COMPANY_SAVED, 
    RESET_NEW_COMPANY, 
    NEW_COMPANY_NAME_SUCCESS_VALIDATION, 
    NEW_COMPANY_NAME_ERROR_VALIDATION, 
    NEW_COMPANY_ADDRESS_ERROR_VALIDATION, 
    NEW_COMPANY_ADDRESS_SUCCESS_VALIDATION 
} from "../../actions/companies-page/new-company";

export const updateNewCompanyName = name => {
    return {
        type: UPDATE_NEW_COMPANY_NAME,
        value: name
    }
}

export const updateNewCompanyAddress = address => {
    return {
        type: UPDATE_NEW_COMPANY_ADDRESS,
        value: address
    }
}

export const newCompanySaved = () => {
    return {
        type: NEW_COMPANY_SAVED
    }
}

export const resetNewCompany = () => {
    return {
        type: RESET_NEW_COMPANY
    }
}

export const newCompanyNameSuccessValidation = () => {
    return {
        type: NEW_COMPANY_NAME_SUCCESS_VALIDATION
    }
}

export const newCompanyNameErrorValidation = (errorMessage) => {
    return {
        type: NEW_COMPANY_NAME_ERROR_VALIDATION,
        value: errorMessage
    }
}

export const newCopmanyAddressSuccessValidation = () => {
    return {
        type: NEW_COMPANY_ADDRESS_SUCCESS_VALIDATION
    }
}

export const newCompanyAddressErrorValidation = (errorMessage) => {
    return {
        type: NEW_COMPANY_ADDRESS_ERROR_VALIDATION,
        value: errorMessage
    }
}