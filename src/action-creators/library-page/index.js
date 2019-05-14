import competenceActionCreators from './competence'
import indicatorActionCreators from './indicator'

import {
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

export {
    competenceActionCreators,
    indicatorActionCreators,
    switchTab
}