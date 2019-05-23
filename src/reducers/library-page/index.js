import {
    UPDATE_NEW_INDICATOR_NAME,
    UPDATE_NEW_INDICATOR_GROUP_ID,
    UPDATE_NEW_INDICATORS_GROUP_NAME,
    UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION,

    UPDATE_DELETED_INDICATORS,
    UPDATE_DELETED_INDICATORS_GROUPS,

    RESET_DELETED_INDICATORS,
    RESET_DELETED_INDICATORS_GROUPS,

    UPDATE_EDIT_INDICATOR_NAME,
    UPDATE_EDIT_INDICATOR_GROUP_ID,
    UPDATE_EDIT_INDICATORS_GROUP_NAME,
    UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION,

    SAVE_LOADED_INDICATORS,
    SAVE_LOADED_INDICATORS_GROUPS,

    START_LOADING_INDICATORS,
    FINISH_LOADING_INDICATORS
} from '../../actions/library-page/indicators'

import {
    FULFIL_INITIAL_LOADING,
    RESET_INITIAL_LOADING,
    START_APPLYING_CHANGES,
    FINISH_APPLYING_CHANGES
} from '../../actions/library-page'

const initialState = {
    indicators: [],
    indicatorsGroups: [],
    deletedIndicators: [],
    deletedIndicatorsGroups: [],
    newIndicator: {
        name: '',
        groupId: ''
    },
    editIndicator: {
        id: '',
        name: '',
        groupId: ''
    },
    newIndicatorsGroup: {
        name: '',
        description: ''
    },
    editIndicatorsGroup: {
        id: '',
        name: '',
        description: ''
    },

    loadingIndicators: false,
    applyingChanges: false,
    loadingInitial: false
}
const resetDeletedIndicatorsGroups = (state) => {
    return {
        ...state,
        deletedIndicatorsGroups: []
    }
}
const resetDeletedIndicators = (state) => {
    return {
        ...state,
        deletedIndicators: []
    }
}
const startLoadingIndicators = (state, value) => {
    return {
        ...state,
        loadingIndicators: true
    }
}
const finishLoadingIndicators = (state, value) => {
    return {
        ...state,
        loadingIndicators: false
    }
}
const saveLoadedIndicators = (state, value) => {
    return {
        ...state,
        indicators: value
    }
}
const saveLoadedIndicatorsGroups = (state, value) => {
    return {
        ...state,
        indicatorsGroups: value
    }
}
const updateEditIndicatorsGroupName = (state, value) => {
    return {
        ...state,
        editIndicatorsGroup: {
            ...state.editIndicatorsGroup,
            name: value
        }
    }
}
const updateEditIndicatorsGroupDescription = (state, value) => {
    return {
        ...state,
        editIndicatorsGroup: {
            ...state.editIndicatorsGroup,
            description: value
        }
    }
}
const updateNewIndicatorsGroupName = (state, value) => {
    return {
        ...state,
        newIndicatorsGroup: {
            ...state.newIndicatorsGroup,
            name: value
        }
    }
}
const updateNewIndicatorsGroupDescription = (state, value) => {
    return {
        ...state,
        newIndicatorsGroup: {
            ...state.newIndicatorsGroup,
            description: value
        }
    }
}
const updateDeletedIndicators = (state, value) => {
    return {
        ...state,
        deletedIndicators: []
    }
}
const updateDeletedIndicatorsGroups = (state, value) => {
    return {
        ...state
    }
}
const updateEditIndicatorGroupId = (state, value) => {
    return {
        ...state,
        editIndicator: {
            ...state.editIndicator,
            groupId: value
        }
    }
}
const updateEditIndicatorName = (state, value) => {
    return {
        ...state,
        editIndicator: {
            ...state.editIndicator,
            name: value
        }
    }
}
const updateNewIndicatorName = (state, value) => {
    return {
        ...state,
        newIndicator: {
            ...state.newIndicator,
            name: value
        }
    }
}
const updateNewIndicatorGroupId = (state, value) => {
    return {
        ...state,
        newIndicator: {
            ...state.newIndicator,
            groupId: value
        }
    }
}
const fulfilInitialLoading = (state) => {
    return {
        ...state,
        loadingInitial: true
    }
}
const resetInitialLoading = (state) => {
    return {
        ...state,
        loadingInitial: false
    }
}
const startApplyingChanges = (state) => {
    return {
        ...state,
        applyingChanges: true
    }
}
const finishApplyingChanges = (state) => {
    return {
        ...state,
        applyingChanges: false
    }
}


const rootReducer = (state = initialState, {type, value}) => {
    switch(type){
        case START_APPLYING_CHANGES:
            return startApplyingChanges(state);
        case FINISH_APPLYING_CHANGES:
            return finishApplyingChanges(state);
        case FULFIL_INITIAL_LOADING:
            return fulfilInitialLoading(state);
        case RESET_INITIAL_LOADING:
            return resetInitialLoading(state);
        case UPDATE_NEW_INDICATOR_NAME:
            return updateNewIndicatorName(state, value);
        case UPDATE_NEW_INDICATOR_GROUP_ID:
            return updateNewIndicatorGroupId(state, value);
        case UPDATE_NEW_INDICATORS_GROUP_NAME:
            return updateNewIndicatorsGroupName(state, value);
        case UPDATE_NEW_INDICATORS_GROUP_DESCRIPTION:
            return updateNewIndicatorsGroupDescription(state, value);
        case UPDATE_DELETED_INDICATORS:
            return updateDeletedIndicators(state, value);
        case UPDATE_DELETED_INDICATORS_GROUPS:
            return updateDeletedIndicatorsGroups(state, value);
        case UPDATE_EDIT_INDICATORS_GROUP_DESCRIPTION:
            return updateEditIndicatorsGroupDescription(state, value);
        case UPDATE_EDIT_INDICATORS_GROUP_NAME:
            return updateEditIndicatorsGroupName(state, value);
        case UPDATE_EDIT_INDICATOR_GROUP_ID:
            return updateEditIndicatorGroupId(state, value);
        case UPDATE_EDIT_INDICATOR_NAME:
            return updateEditIndicatorName(state, value);
        case SAVE_LOADED_INDICATORS:
            return saveLoadedIndicators(state, value);
        case SAVE_LOADED_INDICATORS_GROUPS:
            return saveLoadedIndicatorsGroups(state, value);
        case START_LOADING_INDICATORS:
            return startLoadingIndicators(state);
        case FINISH_LOADING_INDICATORS:
            return finishLoadingIndicators(state);
        case RESET_DELETED_INDICATORS:
            return resetDeletedIndicators(state);
        case RESET_DELETED_INDICATORS_GROUPS:
            return resetDeletedIndicatorsGroups(state);
        default:
            return state;
    }
}

export default rootReducer;