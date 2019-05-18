import {
    PREPARE_LOADING_GROUPS_ENTITIES,
    FINISH_LOADING_GROUPS_ENTITIES,
    SAVE_LOADED_GROUPS_ENTITIES,
    SWITCH_TAB,
    UPDATE_ID_ACTIVE_GROUP_ENTITY,
    PREPARE_LOADING_ENTITIES,
    SAVE_LOADED_ENTITIES,
    FINISH_LOADING_ENTITIES,
    UPDATE_NAME_SEARCH_ENTITY
} from '../../actions/library-page'

const prepareLoadingEntities = () => {
    return {
        type: PREPARE_LOADING_ENTITIES
    }
}

const saveLoadedEntities = (entities) => {
    return {
        type: SAVE_LOADED_ENTITIES,
        payload: {
            value: entities
        }
    }
}

const finishLoadingEntities = () => {
    return {
        type: FINISH_LOADING_ENTITIES
    }
}

const updateNameSearchEntity = (nextName) => {
    return {
        type: UPDATE_NAME_SEARCH_ENTITY,
        payload: {
            value: nextName
        }
    }
}

const switchTab = (nextTab) => {
    return {
        type: SWITCH_TAB,
        payload: {
            value: nextTab
        }
    }
}

const prepareLoadingGroupsEntities = () => {
    return {
        type: PREPARE_LOADING_GROUPS_ENTITIES
    }
}

const finishLoadingGroupsEntities = () => {
    return {
        type: FINISH_LOADING_GROUPS_ENTITIES
    }
}

const saveLoadedGroupsEntities = (groupsEntities) => {
    return {
        type: SAVE_LOADED_GROUPS_ENTITIES,
        payload: {
            value: groupsEntities
        }
    }
}

const updateIdActiveGroupEntity = (id) => {
    return {
        type: UPDATE_ID_ACTIVE_GROUP_ENTITY,
        payload: {
            value: id
        }
    }
}

export {
    prepareLoadingGroupsEntities,
    finishLoadingGroupsEntities,
    saveLoadedGroupsEntities,
    updateIdActiveGroupEntity,
    switchTab,
    prepareLoadingEntities,
    finishLoadingEntities,
    saveLoadedEntities,
    updateNameSearchEntity
}