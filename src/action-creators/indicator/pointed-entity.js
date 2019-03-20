import {pointedEntityAction} from '../../actions/indicator'

const updatePointedIndicatorsForDelete = (id) => {
    return {
        type: pointedEntityAction.UPDATE_POINTED_INDICATORS_FOR_DELETE,
        payload: {
            id
        }
    }
}

const updatePointedIndicatorGroupsForDelete = (id) => {
    return {
        type: pointedEntityAction.UPDATE_POINTED_INDICATOR_GROUPS_FOR_DELETE,
        payload: {
            id
        }
    }
}

const resetPointedIndicatorsForDelete = () => {
    return {
        type: pointedEntityAction.RESET_POINTED_INDICATORS_FOR_DELETE
    }
}

const resetPointedIndicatorGroupsForDelete = () => {
    return {
        type: pointedEntityAction.RESET_POINTED_INDICATOR_GROUPS_FOR_DELETE
    }
}

export {
    updatePointedIndicatorGroupsForDelete,
    updatePointedIndicatorsForDelete,
    resetPointedIndicatorGroupsForDelete,
    resetPointedIndicatorsForDelete
}