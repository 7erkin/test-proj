import * as declaredAction from '../../actions/common'

const setApplicationError = (state, action) => {
    return {
        ...state,
        applicationError: true
    }
}

const initialState = {
    applicationError: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case declaredAction.SET_APP_ERROR:
            return setApplicationError(state, action);
        default:
            return state;
    }
}

export default rootReducer;