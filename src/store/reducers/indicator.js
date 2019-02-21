import {
    ADD_INDICATOR,
    ADD_INDICATOR_GROUP,
    SAVE_LOADED_INDICATOR_GROUPS,
    DELETE_INDICATOR,
    DELETE_INDICATOR_GROUP
} from './../actions/indicator'

const addIndicatorReducer = (state, action) => {
    const newState = Object.assign({}, state);
    const {
        name, 
        groupId
    } = action.payload;
    newState.indicatorGroups.some(group => {
        if(group.id == Number(groupId)){
            const quantityIndicators = group.indicators.length;
            group.indicators.push({
                id: quantityIndicators + 20,
                name
            });
            return true;
        }
        return false;
    });
    return newState;
};
const addIndicatorGroupReducer = (state, action) => {
    const newState = Object.assign({}, state);
    newState.indicatorGroups.push({
        id: newState.indicatorGroups.length + 10,
        name: action.payload.name,
        description: action.payload.description,
        indicators: []
    })
    return newState;
};
const saveLoadedIndicatorGroupsReducer = (state, action) => {
    return action.payload.indicatorGroups;
}
const deleteIndicatorReducer = (state, action) => {
    const {indicatorId, groupId} = action.payload;
    debugger;
    const newState = Object.assign({}, state);
    for(const group of newState.indicatorGroups){
        if(group.id != groupId)
            continue;

        group.indicators.some((indicator, index) => {
            if(indicator.id != indicatorId)
                return false;
            
            group.indicators.splice(index, 1);
            return true;
        });

        break;
    }

    return newState;
};
const deleteIndicatorGroupReducer = (state, action) => {
    const newState = Object.assign({}, state);
    newState.indicatorGroups.some((group, index) => {
        if(group.id != action.payload.id)
            return false;

        newState.indicatorGroups.splice(index, 1);
        return true;
    });

    return newState;
};

const rootReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_INDICATOR:
            return addIndicatorReducer(state, action);
        case ADD_INDICATOR_GROUP:
            return addIndicatorGroupReducer(state, action);
        case SAVE_LOADED_INDICATOR_GROUPS:
            return saveLoadedIndicatorGroupsReducer(state, action);
        case DELETE_INDICATOR:
            return deleteIndicatorReducer(state, action);
        case DELETE_INDICATOR_GROUP:
            return deleteIndicatorGroupReducer(state, action);
        default:
            return state; 
    }
};

export default rootReducer;