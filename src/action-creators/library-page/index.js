import {
    PREPARE_LOADING_GROUPS_ENTITIES,
    FINISH_LOADING_GROUPS_ENTITIES,
    SAVE_LOADED_GROUPS_ENTITIES,
    SWITCH_TAB
} from '../../actions/library-page'

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

export {
    prepareLoadingGroupsEntities,
    finishLoadingGroupsEntities,
    saveLoadedGroupsEntities,
    switchTab
}