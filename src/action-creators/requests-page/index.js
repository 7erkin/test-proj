import * as action from '../../actions/requests-page'

const showAddNewRequestForm = () => {
    return {
        type: action.SHOW_ADD_NEW_REQUEST_FORM
    }
}

const hideAddNewRequestForm = () => {
    return {
        type: action.HIDE_ADD_NEW_REQUEST_FORM
    }
}

const updateSearchCompanyBar = (pattern) => {
    return {
        type: action.UPDATE_SEARCH_COMPANY_BAR,
        payload: {
            value: pattern
        }
    }
}

export {
    showAddNewRequestForm,
    hideAddNewRequestForm,
    updateSearchCompanyBar
}
