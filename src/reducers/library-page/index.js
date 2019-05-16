import {
    PREPARE_LOADING_GROUPS_ENTITIES,
    FINISH_LOADING_GROUPS_ENTITIES,
    SAVE_LOADED_GROUPS_ENTITIES,
    SWITCH_TAB
} from '../../actions/library-page'

const prepareLoadingGroupsEntities = (state) => {
    return {
        ...state,
        loadingGroupsEntities: true
    }
}

const finishLoadingGroupsEntities = (state) => {
    return {
        ...state,
        loadingGroupsEntities: false
    }
}

const saveLoadedEntitiesGroups = (state, {value}) => {
    return {
        ...state,
        groupsEntities: value,
        isGroupsEntitiesNeedToUpdate: false
    }
}

const switchTab = (state, {value}) => {
    return {
        ...state,
        activeTab: value,
        isGroupsEntitiesNeedToUpdate: true
    }
}

const initialState = {
    activeTab: '',
    groupsEntities: [],
    loadingGroupsEntities: false, 
    isGroupsEntitiesNeedToUpdate: false
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case PREPARE_LOADING_GROUPS_ENTITIES:
            return prepareLoadingGroupsEntities(state);
        case FINISH_LOADING_GROUPS_ENTITIES:
            return finishLoadingGroupsEntities(state);
        case SAVE_LOADED_GROUPS_ENTITIES:
            return saveLoadedEntitiesGroups(state, payload);
        case SWITCH_TAB:
            return switchTab(state, payload);
        default:
            return state;
    }
}

export default rootReducer;