import {visibleAction} from '../../actions/indicator'

const setAddIndicatorFormVisible = (status) => {
    return {
        type: visibleAction.SET_ADD_INDICATOR_FORM_VISIBLE,
        payload: {
            status
        }
    }
}

const setEditIndicatorFormVisible = (status) => {
    return {
        type: visibleAction.SET_EDIT_INDICATOR_FORM_VISIBLE,
        payload: {
            status
        }
    }
}

const setAddIndicatorGroupFormVisible = (status) => {
    return {
        type: visibleAction.SET_ADD_INDICATOR_GROUP_FORM_VISIBLE,
        payload: {
            status
        }
    }
}

const setEditIndicatorGroupFormVisible = (status) => {
    return {
        type: visibleAction.SET_EDIT_INDICATOR_GROUP_FORM_VISIBLE,
        payload: {
            status
        }
    }
}

export {
    setAddIndicatorFormVisible,
    setAddIndicatorGroupFormVisible,
    setEditIndicatorGroupFormVisible,
    setEditIndicatorFormVisible
}