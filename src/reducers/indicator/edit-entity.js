import {editEntityAction} from '../../actions/indicator'

export const setEditIndicator = (state, action) => {
    const index = action.indicators.findIndex(el => el.id == action.payload.id);
    const editIndicator = action.indicators[index];
    return {
        ...state,
        indicator: {
            ...editIndicator,
            groupId: state.activeIndicatorGroupId
        }
    }
}
export const updateEditIndicatorName = (state, action) => {
    return {
        ...state,
        indicator: {
            ...state.indicator,
            name: action.payload.name
        }
    }
}
export const updateEditIndicatorGroupId = (state, action) => {
    return {
        ...state,
        indicator: {
                ...state.indicator,
            groupId: action.payload.id
        }
    }
}
export const resetEditIndicator = (state, action) => {
    return {
        ...state,
        indicator: {
            id: '',
            name: '',
            groupId: ''
        }
    }
}

export const setEditIndicatorGroup = (state, action) => {
    const index = action.indicatorGroups.findIndex(el => el.id == action.payload.id);
    const editIndicatorGroup = action.indicatorGroups[index];
    return {
        ...state,
        indicatorGroup: {
            ...editIndicatorGroup
        }
    }
}
export const updateEditIndicatorGroupName = (state, action) => {
    return {
        ...state,
        indicatorGroup: {
            ...state.indicatorGroup,
            name: action.payload.name
        }
    }
}
export const updateEditIndicatorGroupDescription = (state, action) => {
    return {
        ...state,
        indicatorGroup: {
            ...state.indicatorGroup,
            description: action.payload.description
        }
    }
}
export const resetEditIndicatorGroup = (state, action) => {
    return {
        ...state,
        indicatorGroup: {
            id: '',
            name: '',
            description: ''
        }
    }
}

const initialState = {
    indicator: {
        id: '',
        name: '',
        groupId: ''
    },
    indicatorGroup: {
        id: '',
        name: '',
        description: ''
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case editEntityAction.SET_EDIT_INDICATOR:
            return setEditIndicator(state, action);
        case editEntityAction.UPDATE_EDIT_INDICATOR_NAME:
            return updateEditIndicatorName(state, action);
        case editEntityAction.UPDATE_EDIT_INDICATOR_GROUP_ID:
            return updateEditIndicatorGroupId(state, action);
        case editEntityAction.RESET_EDIT_INDICATOR:
            return resetEditIndicator(state, action);
        case editEntityAction.SET_EDIT_INDICATOR_GROUP:
            return setEditIndicatorGroup(state, action);
        case editEntityAction.UPDATE_EDIT_INDICATOR_GROUP_NAME:
            return updateEditIndicatorGroupName(state, action);
        case editEntityAction.UPDATE_EDIT_INDICATOR_GROUP_DESCRIPTION:
            return updateEditIndicatorGroupDescription(state, action);
        case editEntityAction.RESET_EDIT_INDICATOR_GROUP:
            return resetEditIndicatorGroup(state, action);
        default:
            return state;
    }
}

export default rootReducer;
