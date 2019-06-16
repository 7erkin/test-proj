import {
    FULFIL_INITIAL_LOADING,
    RESET_INITIAL_LOADING,
    START_APPLYING_CHANGES,
    FINISH_APPLYING_CHANGES
} from '../../actions/library-page/page-managing'

const startApplyingChanges = () => {
    return {
        type: START_APPLYING_CHANGES
    }
}

const finishApplyingChanges = () => {
    return {
        type: FINISH_APPLYING_CHANGES
    }
}

const fulfilInitialLoading = () => {
    return {
        type: FULFIL_INITIAL_LOADING
    }
}

const resetInitialLoading = () => {
    return {
        type: RESET_INITIAL_LOADING
    }
}

export {
    fulfilInitialLoading,
    resetInitialLoading,
    startApplyingChanges,
    finishApplyingChanges
}