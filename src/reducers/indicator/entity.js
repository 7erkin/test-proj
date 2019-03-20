import {entityAction} from '../../actions/indicator' 

export const saveIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: action.payload.indicatorGroups
    }
}
export const resetIndicatorGroups = (state, action) => {
    return {
        ...state,
        indicatorGroups: []
    }
}

export const saveIndicators = (state, action) => {
    return {
        ...state,
        indicators: action.payload.indicators
    }
}
export const resetIndicators = (state, action) => {
    return {
        ...state,
        indicators: []
    }
}

export const setActiveIndicatorGroupId = (state, action) => {
    return {
        ...state,
        activeIndicatorGroupId: action.payload.id
    }
}
export const resetActiveIndicatorGroupId = (state, action) => {
    return {
        ...state,
        activeIndicatorGroupId: null
    }
}

const initialState = {
    indicatorGroups: [],
    indicators: [],
    activeIndicatorGroupId: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case entityAction.SAVE_INDICATORS:
            return saveIndicators(state, action);
        case entityAction.RESET_INDICATORS:
            return resetIndicators(state, action);
        case entityAction.SAVE_INDICATOR_GROUPS:
            return saveIndicatorGroups(state, action);
        case entityAction.RESET_INDICATOR_GROUPS:
            return resetIndicatorGroups(state, action);
        case entityAction.RESET_ACTIVE_INDICATOR_GROUP_ID:
            return resetActiveIndicatorGroupId(state, action);
        case entityAction.SET_ACTIVE_INDICATOR_GROUP_ID:
            return setActiveIndicatorGroupId(state, action);
        default:
            return state;
    }
}

export default rootReducer;