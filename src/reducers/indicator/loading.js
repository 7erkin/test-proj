import {loadingAction} from '../../actions/indicator'

export const setLoadingIndicators = (state, action) => {
    return {
        ...state,
        indicators: action.payload.status
    }
}

export const setLoadingIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: action.payload.status
    }
}

const initialState = {
    indicators: false,
    indicatorGroups: false 
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case loadingAction.SET_LOADING_INDICATORS:
            return setLoadingIndicators(state, action);
        case loadingAction.SET_LOADING_INDICATOR_GROUPS:
            return setLoadingIndicatorGroups(state, action);
        default:
            return state;
    }
}

export default rootReducer;