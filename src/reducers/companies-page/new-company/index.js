import initialState from "./initial-state"

import { 
    UPDATE_NEW_COMPANY_NAME, 
    UPDATE_NEW_COMPANY_ADDRESS, 
    NEW_COMPANY_SAVED, 
    RESET_NEW_COMPANY, 
    NEW_COMPANY_NAME_SUCCESS_VALIDATION, 
    NEW_COMPANY_NAME_ERROR_VALIDATION, 
    NEW_COMPANY_ADDRESS_SUCCESS_VALIDATION, 
    NEW_COMPANY_ADDRESS_ERROR_VALIDATION 
} from "../../../actions/companies-page/new-company";

import { 
    updateNewCompanyName, 
    updateNewCompanyAddress, 
    newCompanySaved, 
    resetNewCompany, 
    newCompanyNameErrorValidation, 
    newCompanyAddressSuccessValidation, 
    newCompanyAddressErrorValidation, 
    newCompanyNameSuccessValidation 
} from './new-company'

const rootReducer = (state = initialState, { type, value }) => {
    switch(type) {
        case UPDATE_NEW_COMPANY_NAME:
            return updateNewCompanyName(state, value)
        case UPDATE_NEW_COMPANY_ADDRESS:
            return updateNewCompanyAddress(state, value)
        case NEW_COMPANY_SAVED:
            return newCompanySaved(state)
        case RESET_NEW_COMPANY:
            return resetNewCompany(state)
        case NEW_COMPANY_NAME_SUCCESS_VALIDATION:
            return newCompanyNameSuccessValidation(state)
        case NEW_COMPANY_NAME_ERROR_VALIDATION:
            return newCompanyNameErrorValidation(state, value)
        case NEW_COMPANY_ADDRESS_SUCCESS_VALIDATION:
            return newCompanyAddressSuccessValidation(state)
        case NEW_COMPANY_ADDRESS_ERROR_VALIDATION:
            return newCompanyAddressErrorValidation(state, value)
        default:
            return state
    }
}

export default rootReducer