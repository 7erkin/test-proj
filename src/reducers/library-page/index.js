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
    FINISH_LOADING_INDICATORS,

    NEW_INDICATORS_GROUP_SAVED,
    NEW_INDICATOR_SAVED,
    EDIT_INDICATORS_GROUP_SAVED,
    EDIT_INDICATOR_SAVED,
    INDICATORS_GROUPS_DELETED
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
        idGroup: ''
    },
    editIndicator: {
        name: '',
        idGroup: ''
    },
    newIndicatorsGroup: {
        name: '',
        description: ''
    },
    editIndicatorsGroup: {
        name: '',
        description: ''
    },

    loadingIndicators: false,
    applyingChanges: false,
    loadingInitial: false
}
const newIndicatorSaved = (state) => {
    return {
        ...state,
        newIndicator: {
            ...initialState.newIndicator
        },
        loadingInitial: false
    }
}
const newIndicatorsGroupSaved = (state) => {
    return {
        ...state,
        newIndicatorsGroup: {
            ...initialState.newIndicatorsGroup
        },
        loadingInitial: false
    }
}
const editIndicatorSaved = (state) => {
    return {
        ...state,
        editIndicator: {
            ...initialState.editIndicator
        },
        loadingInitial: false
    }
}
const editIndicatorsGroupSaved = (state) => {
    return {
        ...state,
        editIndicatorsGroup: {
            ...initialState.editIndicatorsGroup
        },
        loadingInitial: false
    }
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
    const deletedIndicators = [...state.deletedIndicators];
    const index = deletedIndicators.findIndex(id => id == value);

    index === -1 ? deletedIndicators.push(value) : deletedIndicators.splice(index, 1);

    return {
        ...state,
        deletedIndicators
    }
}
const updateDeletedIndicatorsGroups = (state, value) => {
    const deletedIndicatorsGroups = [...state.deletedIndicatorsGroups];
    const index = deletedIndicatorsGroups.findIndex(id => id == value);

    index === -1 ? deletedIndicatorsGroups.push(value) : deletedIndicatorsGroups.splice(index, 1);

    return {
        ...state,
        deletedIndicatorsGroups
    }
}
const updateEditIndicatoridGroup = (state, value) => {
    return {
        ...state,
        editIndicator: {
            ...state.editIndicator,
            idGroup: value
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
const updateNewIndicatoridGroup = (state, value) => {
    return {
        ...state,
        newIndicator: {
            ...state.newIndicator,
            idGroup: value
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
const indicatorsGroupsDeleted = (state) => {
    return {
        ...state,
        deletedIndicatorsGroups: [],
        loadingInitial: false
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
            return updateNewIndicatoridGroup(state, value);
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
            return updateEditIndicatoridGroup(state, value);
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
        case NEW_INDICATORS_GROUP_SAVED:
            return newIndicatorsGroupSaved(state);
        case NEW_INDICATOR_SAVED:
            return newIndicatorSaved(state);
        case EDIT_INDICATORS_GROUP_SAVED:
            return editIndicatorsGroupSaved(state);
        case EDIT_INDICATOR_SAVED:
            return editIndicatorSaved(state);
        case INDICATORS_GROUPS_DELETED:
            return indicatorsGroupsDeleted(state);
        default:
            return state;
    }
}

export default rootReducer;