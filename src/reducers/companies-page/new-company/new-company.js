import initialState from './initial-state'

export const updateNewCompanyName = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            text: value
        }
    }
}

export const updateNewCompanyAddress = (state, value) => {
    return {
        ...state,
        address: {
            ...state.address,
            text: value
        }
    }
}

export const newCompanySaved = () => {
    return {
        ...initialState
    }
}

export const resetNewCompany = () => {
    return {
        ...initialState
    }
}

export const newCompanyNameSuccessValidation = (state) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: ''
        }
    }
}

export const newCompanyAddressSuccessValidation = (state) => {
    return {
        ...state,
        address: {
            ...state.address,
            errorMessage: ''
        }
    }
}

export const newCompanyNameErrorValidation = (state, value) => {
    return {
        ...state,
        name: {
            ...state.name,
            errorMessage: value
        }
    }
}

export const newCompanyAddressErrorValidation = (state, value) => {
    return {
        ...state,
        address: {
            ...state.address,
            errorMessage: value
        }
    }
}
