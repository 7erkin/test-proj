import {
    UPDATE_VISIBLE_ENTITIES
} from '../../actions/common'

export const updateVisibleEntities = name => {
    return {
        type: UPDATE_VISIBLE_ENTITIES,
        value: name
    }
}