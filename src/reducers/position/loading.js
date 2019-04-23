import {loadingAction} from '../../actions/position'

const startPositionPageLoading = (state, action) => {
    return {
        ...state,
        page: true
    }
}

const startSubdivisionsLoading = (state, action) => {
    return {
        ...state,
        subdivisions: true
    }
}

const startIndicatorGroupsLoading = (state, action) => {
    return {
        ...state,
        indicatorGroups: true
    }
}

const startIndicatorsLoading = (state, action) => {
    return {
        ...state,
        indicators: true
    }
}

const finishPositionPageLoading = (state, action) => {
    return {
        ...state,
        page: false
    }
}

const finishSubdivisionsLoading = (state, action) => {
    return {
        ...state,
        subdivisions: false
    }
}

const finishIndicatorGroupsLoading = (state, action) => {
    return {
        ...state,
        indicatorGroups: false
    }
}

const finishIndicatorsLoading = (state, action) => {
    return {
        ...state,
        indicators: false
    }
}

const startLoadingPositionPage = (state, action) => {
    return {
        ...state,
        page: true
    }
}

const finishLoadingPositionPage = (state, action) => {
    return {
        ...state,
        page: false
    }
}

const startLoadingPositions = (state, action) => {
    return {
        ...state,
        positions: true
    }
}

const finishLoadingPositions = (state, action) => {
    return {
        ...state,
        positions: false
    }
}

const initialState = {
    page: false,
    subdivisions: false,
    indicatorGroups: false,
    indicators: false,
    positions: false
}

const {
    START_LOADING_PAGE,
    START_LOADING_POSITIONS,
    FINISH_LOADING_PAGE,
    FINISH_LOADING_POSITIONS
} = loadingAction

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case START_LOADING_PAGE:
            return startLoadingPositionPage(state, action);
        case START_LOADING_POSITIONS:
            return startLoadingPositions(state, action);
        case FINISH_LOADING_POSITIONS:
            return finishLoadingPositions(state, action);
        case FINISH_LOADING_PAGE:
            return finishLoadingPositionPage(state, action);
        default:
            return state;
    }
}

export default rootReducer;