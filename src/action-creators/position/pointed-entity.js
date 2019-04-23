import {pointedEntityAction} from '../../actions/position'

const {
    UPDATE_POINTED_INDICATORS,
    RESET_POINTED_INDICATORS
} = pointedEntityAction;

const updatePointedIndicators = (id, name, groupId) => {
    return {
        type: UPDATE_POINTED_INDICATORS,
        payload: {
            id,
            name,
            groupId
        }
    }
}

const resetPointedIndicators = () => {
    return {
        type: RESET_POINTED_INDICATORS
    }
}

export {
    updatePointedIndicators,
    resetPointedIndicators
}