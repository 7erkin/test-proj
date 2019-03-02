import {
    combineReducers
} from 'redux'

import indicatorReducer from './indicator'
import competenceReducer from './competence'

export default combineReducers({
    indicatorStore: indicatorReducer,
    competenceStore: competenceReducer
});