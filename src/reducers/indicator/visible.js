import {visibleAction} from '../../actions/indicator'

export const setAddIndicatorFormVisible = (state, action) => {
    return {
        ...state,
        addIndicatorForm: action.payload.status
    }
}

export const setEditIndicatorFormVisible = (state, action) => {
    return {
        ...state,
        editIndicatorForm: action.payload.status
    }
}

export const setAddIndicatorGroupFormVisible = (state, action) => {
    return {
        ...state,
        addIndicatorGroupForm: action.payload.status
    }
}

export const setEditIndicatorGroupFormVisible = (state, action) => {
    return {
        ...state,
        editIndicatorGroupForm: action.payload.status
    }
}

const initialState = {
    addIndicatorForm: false,
    addIndicatorGroupForm: false,
    editIndicatorForm: false,
    editIndicatorGroupForm: false
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case visibleAction.SET_ADD_INDICATOR_FORM_VISIBLE:
            return setAddIndicatorFormVisible(state, action);
        case visibleAction.SET_ADD_INDICATOR_GROUP_FORM_VISIBLE:
            return setAddIndicatorGroupFormVisible(state, action);
        case visibleAction.SET_EDIT_INDICATOR_FORM_VISIBLE:
            return setEditIndicatorFormVisible(state, action);
        case visibleAction.SET_EDIT_INDICATOR_GROUP_FORM_VISIBLE:
            return setEditIndicatorGroupFormVisible(state, action);
        default:
            return state;
    }
}

export default rootReducer;