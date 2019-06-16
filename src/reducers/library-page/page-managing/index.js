import initialState from './initial-state'

import * as _ from './page-managing'

import {
    START_APPLYING_CHANGES,
    FINISH_APPLYING_CHANGES,
    FULFIL_INITIAL_LOADING,
    RESET_INITIAL_LOADING
} from '../../../actions/library-page/page-managing'

export default (state = initialState, { type }) => {
    switch(type) {
        case START_APPLYING_CHANGES:
            return _.startApplyingChanges(state)
        case FINISH_APPLYING_CHANGES:
            return _.finishApplyingChanges(state)
        case FULFIL_INITIAL_LOADING:
            return _.fulfilInitialLoading(state)
        case RESET_INITIAL_LOADING:
            return _.resetInitialLoading(state)
        default:
            return state;
    }
}