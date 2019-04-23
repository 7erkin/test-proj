import {UNDEFINED} from '../../../utils/index'

import {AccordeonIndicatorAction} from '../../../actions/common'

const {
    SAVE_LOADED_INDICATORS,
    SAVE_LOADED_INDICATOR_GROUPS,
    START_LOADING_INDICATORS,
    START_LOADING_INDICATOR_GROUPS,
    SET_ACTIVE_INDICATOR_GROUP,
    FINISH_LOADING_INDICATORS,
    FINISH_LOADING_INDICATOR_GROUPS
} = AccordeonIndicatorAction;

const saveLoadedIndicators = (state, action) => {
    const {indicators} = action.payload;
    return {
        ...state,
        indicators
    }
}

const saveLoadedIndicatorGroups = (state, action) => {
    const {indicatorGroups} = action.payload;
    return {
        ...state,
        indicatorGroups
    }
}

const startLoadingIndicators = (state, action) => {
    return {
        ...state,
        loading: {
            ...state.loading,
            indicators: true
        }
    }
}

const startLoadingIndicatorGroups = (state, action) => {
    return {
        ...state,
        loading: {
            ...state.loading,
            indicatorGroups: true
        }
    }
}

const finishLoadingIndicators= (state, action) => {
    return {
        ...state,
        loading: {
            ...state.loading,
            indicators: false
        }
    }
}

const finishLoadingIndicatorGroups = (state, action) => {
    return {
        ...state,
        loading: {
            ...state.loading,
            indicatorGroups: false
        }
    }
}

const setActiveIndicatorGroup = (state, action) => {
    const {id} = action.payload;
    return {
        ...state,
        activeIndicatorGroupId: id
    }
}

const initialState = {
    indicators: [],
    indicatorGroups: [],
    loading: {
        indicators: false,
        indicatorGroups: false
    },
    activeIndicatorGroupId: UNDEFINED
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_LOADED_INDICATORS:
            return saveLoadedIndicators(state, action);
        case SAVE_LOADED_INDICATOR_GROUPS:
            return saveLoadedIndicatorGroups(state, action);
        case START_LOADING_INDICATORS:
            return startLoadingIndicators(state, action);
        case START_LOADING_INDICATOR_GROUPS:
            return startLoadingIndicatorGroups(state, action);
        case FINISH_LOADING_INDICATORS:
            return finishLoadingIndicators(state, action);
        case FINISH_LOADING_INDICATOR_GROUPS:
            return finishLoadingIndicatorGroups(state, action);
        case SET_ACTIVE_INDICATOR_GROUP:
            return setActiveIndicatorGroup(state, action);
        default: 
            return state;
    }
}

export default rootReducer;