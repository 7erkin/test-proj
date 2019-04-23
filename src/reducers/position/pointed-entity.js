import {pointedEntityAction} from '../../actions/position'

const {
    UPDATE_POINTED_INDICATORS,
    RESET_POINTED_INDICATORS
} = pointedEntityAction;

const updateIndicators = (state, action) => {
    const {id, name, groupId} = action.payload;
    const indicators = [...state.indicators];
    const index = indicators.findIndex(el => el.id == id);

    if(index == -1)
        indicators.push({id, name, groupId})
    else
        indicators.splice(index, 1)

    return {
        ...state,
        indicators
    }
}

const resetIndicators = (state, action) => {
    return {
        ...state,
        indicators: []
    }
}

const initialState = {
    indicators: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_POINTED_INDICATORS:
            return updateIndicators(state, action);
        case RESET_POINTED_INDICATORS:
            return resetIndicators(state, action);
        default:
            return state;
    }
}

export default rootReducer;