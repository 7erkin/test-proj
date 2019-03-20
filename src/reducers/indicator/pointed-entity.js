import {pointedEntityAction} from '../../actions/indicator'

export const updatePointedIndicatorsForDelete = (state, action) => {
    const indicators = state.indicatorsForDelete.slice();
    const index = indicators.findIndex(el => el == action.payload.id);

    if(index == -1)
        indicators.push(action.payload.id);
    else
        indicators.splice(index, 1);

    return {
        ...state,
        indicatorsForDelete: indicators
    }
}

export const updatePointedIndicatorGroupsForDelete = (state, action) => {
    const indicatorGroups = state.indicatorGroupsForDelete.slice();
    const index = indicatorGroups.findIndex(el => el == action.payload.id);

    if(index == -1)
        indicatorGroups.push(action.payload.id);
    else
        indicatorGroups.splice(index, 1);

    return {
        ...state,
        indicatorGroupsForDelete: indicatorGroups
    }
}

export const resetPointedIndicatorsForDelete = (state, action) => {
    return {
        ...state,
        indicatorsForDelete: []
    }
}

export const resetPointedIndicatorGroupsForDelete = (state, action) => {
    return {
        ...state,
        indicatorGroupsForDelete: []
    }
}

const initialState = {
    indicatorsForDelete: [],
    indicatorGroupsForDelete: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case pointedEntityAction.UPDATE_POINTED_INDICATORS_FOR_DELETE:
            return updatePointedIndicatorsForDelete(state, action);
        case pointedEntityAction.UPDATE_POINTED_INDICATOR_GROUPS_FOR_DELETE:
            return updatePointedIndicatorGroupsForDelete(state, action);
        case pointedEntityAction.RESET_POINTED_INDICATORS_FOR_DELETE:
            return resetPointedIndicatorsForDelete(state, action);
        case pointedEntityAction.RESET_POINTED_INDICATOR_GROUPS_FOR_DELETE:
            return resetPointedIndicatorGroupsForDelete(state, action);
        default:
            return state;
    }
}

export default rootReducer;