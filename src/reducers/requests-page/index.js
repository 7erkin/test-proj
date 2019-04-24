import * as action from '../../actions/requests-page'

const initialState = {
    addNewRequestFormVisible: false,
    searchCompanyName: ''
}

const showAddNewRequestForm = (state, payload) => {
    return {
        ...state,
        addNewRequestFormVisible: true
    }
}

const hideAddNewRequestForm = (state, payload) => {
    return {
        ...state,
        addNewRequestFormVisible: false
    }
}

const updateSearchCompanyName = (state, {value}) => {
    return {
        ...state,
        searchCompanyName: value
    }
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case action.SHOW_ADD_NEW_REQUEST_FORM:
            return showAddNewRequestForm(state, payload);
        case action.HIDE_ADD_NEW_REQUEST_FORM:
            return hideAddNewRequestForm(state, payload);
        case action.UPDATE_SEARCH_COMPANY_BAR:
            return updateSearchCompanyName(state, payload);
        default:
            return state;
    }
}

export default rootReducer;