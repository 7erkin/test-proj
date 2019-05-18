import {
    PREPARE_LOADING_GROUPS_ENTITIES,
    FINISH_LOADING_GROUPS_ENTITIES,
    SAVE_LOADED_GROUPS_ENTITIES,
    SWITCH_TAB,
    UPDATE_ID_ACTIVE_GROUP_ENTITY,
    SAVE_LOADED_ENTITIES,
    FINISH_LOADING_ENTITIES,
    UPDATE_NAME_SEARCH_ENTITY,
    PREPARE_LOADING_ENTITIES
} from '../../actions/library-page'

const initialState = {
    activeTab: '',
    groupsEntities: [],
    idActiveGroupEntity: NaN,
    loadingGroupsEntities: false, 
    isGroupsEntitiesNeedToUpdate: false,
    isEntitiesNeedToUpdate: false,
    entities: [],
    loadingEntities: false,
    nameSearchEntity: '',
    visibleEntities: []
}

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
    const {idActiveGroupEntity, nameSearchEntity} = initialState;

    return {
        ...state,
        activeTab: value,
        isGroupsEntitiesNeedToUpdate: true,
        idActiveGroupEntity,
        nameSearchEntity 
    }
}

const updateIdActiveGroupEntity = (state, {value}) => {
    const {idActiveGroupEntity, nameSearchEntity} = initialState;

    return {
        ...state,
        idActiveGroupEntity: value,
        isEntitiesNeedToUpdate: true,
        nameSearchEntity
    }
}

const prepareLoadingEntities = (state) => {
    return {
        ...state,
        loadingEntities: true
    }
}

const finishLoadingEntities = (state) => {
    return {
        ...state,
        loadingEntities: false
    }
}

const saveLoadedEntities = (state, {value}) => {
    return {
        ...state,
        entities: value,
        visibleEntities: value,
        isEntitiesNeedToUpdate: false
    }
}

const updateNameSearchEntity = (state, {value}) => {
    const visibleEntities = state.entities.filter(el => el.name.toUpperCase().indexOf(value.toUpperCase()) != -1);

    return {
        ...state,
        nameSearchEntity: value,
        visibleEntities: visibleEntities
    }
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case UPDATE_ID_ACTIVE_GROUP_ENTITY:
            return updateIdActiveGroupEntity(state, payload);
        case PREPARE_LOADING_GROUPS_ENTITIES:
            return prepareLoadingGroupsEntities(state);
        case FINISH_LOADING_GROUPS_ENTITIES:
            return finishLoadingGroupsEntities(state);
        case SAVE_LOADED_GROUPS_ENTITIES:
            return saveLoadedEntitiesGroups(state, payload);
        case SWITCH_TAB:
            return switchTab(state, payload);
        case PREPARE_LOADING_ENTITIES:
            return prepareLoadingEntities(state);
        case FINISH_LOADING_ENTITIES:
            return finishLoadingEntities(state);
        case SAVE_LOADED_ENTITIES:
            return saveLoadedEntities(state, payload);
        case UPDATE_NAME_SEARCH_ENTITY:
            return updateNameSearchEntity(state, payload);
        default:
            return state;
    }
}

export default rootReducer;