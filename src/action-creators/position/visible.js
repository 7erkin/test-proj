import {visibleAction} from '../../actions/position'

const showModalWindow = () => {
    return {
        type: visibleAction.SHOW_MODAL_WINDOW
    }
}

const hideModalWindow = () => {
    return {
        type: visibleAction.HIDE_MODAL_WINDOW
    }
}

const showIndicatorList = () => {
    return {
        type: visibleAction.SHOW_INDICATOR_LIST
    }
}

const hideIndicatorList = () => {
    return {
        type: visibleAction.HIDE_INDICATOR_LIST
    }
}

const showAddPositionForm = () => {
    return {
        type: visibleAction.SHOW_ADD_POSITION_FORM
    }
}

const hideAddPositionForm = () => {
    return {
        type: visibleAction.HIDE_ADD_POSITION_FORM
    }
}

const showEditPositionForm = () => {
    return {
        type: visibleAction.SHOW_EDIT_POSITION_FORM
    }
}

const hideEditPositionForm = () => {
    return {
        type: visibleAction.HIDE_EDIT_POSITION_FORM
    }
}


export {
    showModalWindow,
    hideModalWindow,
    showIndicatorList,
    hideIndicatorList,
    showAddPositionForm,
    showEditPositionForm,
    hideAddPositionForm,
    hideEditPositionForm
}