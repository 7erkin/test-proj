import {visibleAction} from '../../actions/competence'

const initialState = {
    addCompetenceForm: false,
    editCompetenceForm: false,
    addCompetenceGroupForm: false,
    editCompetenceGroupForm: false
}

const setAddCompetenceFormVisible = (state, action) => {
    return {
        ...state,
        addCompetenceForm: action.payload.status
    }
}

const setAddCompetenceGroupFormVisible = (state, action) => {
    return {
        ...state,
        addCompetenceGroupForm: action.payload.status
    }
}

const setEditCompetenceFormVisible = (state, action) => {
    return {
        ...state,
        editCompetenceForm: action.payload.status
    }
}

const setEditCompetenceGroupFormVisible = (state, action) => {
    return {
        ...state,
        editCompetenceGroupForm: action.payload.status
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case visibleAction.SET_ADD_COMPETENCE_FORM_VISIBLE:
            return setAddCompetenceFormVisible(state, action);
        case visibleAction.SET_ADD_COMPETENCE_GROUP_FORM_VISIBLE:
            return setAddCompetenceGroupFormVisible(state, action);
        case visibleAction.SET_EDIT_COMPETENCE_FORM_VISIBLE:
            return setEditCompetenceFormVisible(state, action);
        case visibleAction.SET_EDIT_COMPETENCE_GROUP_FORM_VISIBLE:
            return setEditCompetenceGroupFormVisible(state, action);
        default:
            return state;
    }
}
    
export default rootReducer;