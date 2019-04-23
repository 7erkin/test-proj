import {
    visibleAction
} from '../../actions/position'

const {
    SHOW_MODAL_WINDOW,
    HIDE_MODAL_WINDOW,
    SHOW_ADD_POSITION_FORM,
    HIDE_ADD_POSITION_FORM,
    SHOW_EDIT_POSITION_FORM,
    HIDE_EDIT_POSITION_FORM,
    SHOW_INDICATOR_LIST,
    HIDE_INDICATOR_LIST
} =  visibleAction;

const showIndicatorList = (state, action) => {
    return {
        ...state,
        indicatorList: true
    }
}

const hideIndicatorList = (state, action) => {
    return {
        ...state,
        indicatorList: false
    }
}

const showEditPositionForm = (state, action) => {
    return {
        ...state,
        editPositionForm: true
    }
}

const hideEditPositionForm = (state, action) => {
    return {
        ...state,
        editPositionForm: false
    }
}

const showAddPositionForm = (state, action) => {
    return {
        ...state,
        addPositionForm: true
    }
}

const hideAddPositionForm = (state, action) => {
    return {
        ...state,
        addPositionForm: false
    }
}

const showModalWindow = (state, action) => {
    return {
        ...state,
        modalWindow: true
    }
}

const hideModalWindow = (state, action) => {
    return {
        ...state,
        modalWindow: false
    }
}

const initialState = {
    indicatorList: false,
    editPositionForm: false,
    addPositionForm: false,
    modalWindow: false  
}

const rootReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SHOW_MODAL_WINDOW:
            return showModalWindow(state, action);
        case HIDE_MODAL_WINDOW:
            return hideModalWindow(state, action);
        case SHOW_ADD_POSITION_FORM:
            return showAddPositionForm(state, action);
        case HIDE_ADD_POSITION_FORM:
            return hideAddPositionForm(state, action);
        case SHOW_EDIT_POSITION_FORM:
            return showEditPositionForm(state, action);
        case HIDE_EDIT_POSITION_FORM:
            return hideEditPositionForm(state, action);
        case SHOW_INDICATOR_LIST:
            return showIndicatorList(state, action);
        case HIDE_INDICATOR_LIST:
            return hideIndicatorList(state, action);    
        default:
            return state;
    }
}

export default rootReducer;