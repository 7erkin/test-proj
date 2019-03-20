import {newEntityAction} from '../../actions/indicator'

export const updateNewIndicatorName = (state, action) => {
    return {
        ...state,
        indicator: {
            ...state.indicator,
            name: action.payload.name
        }
    }
}
export const updateNewIndicatorGroupId = (state, action) => {
    return {
        ...state,
        indicator: {
            ...state.indicator,
            groupId: action.payload.id
        }
    }
}
export const resetNewIndicator = (state, action) => {
    return {
        ...state,
        indicator: {
            name: '',
            groupId: ''
        }
    }
}

export const updateNewIndicatorGroupName = (state, action) => {
    return {
        ...state,
        indicatorGroup: {
            ...state.indicatorGroup,
            name: action.payload.name
        }
    }
}
export const updateNewIndicatorGroupDescription = (state, action) => {
    return {
        ...state,
        indicatorGroup: {
            ...state.indicatorGroup,
            description: action.payload.description
        }
    }
}
export const resetNewIndicatorGroup = (state, action) => {
    return {
        ...state,
        indicatorGroup: {
            name: '',
            description: ''
        }
    }
}

const initialState = {
    indicator: {
        name: '',
        groupId: ''
    },
    indicatorGroup: {
        name: '',
        description: ''
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case newEntityAction.UPDATE_NEW_INDICATOR_NAME:
            return updateNewIndicatorName(state, action);
        case newEntityAction.UPDATE_NEW_INDICATOR_GROUP_ID:
            return updateNewIndicatorGroupId(state, action);
        case newEntityAction.UPDATE_NEW_INDICATOR_GROUP_NAME:
            return updateNewIndicatorGroupName(state, action);
        case newEntityAction.UPDATE_NEW_INDICATOR_GROUP_DESCRIPTION:
            return updateNewIndicatorGroupDescription(state, action);
        case newEntityAction.RESET_NEW_INDICATOR:
            return resetNewIndicator(state, action);
        case newEntityAction.RESET_NEW_INDICATOR_GROUP:
            return resetNewIndicatorGroup(state, action);
        default:
            return state;
    }
}

export default rootReducer;