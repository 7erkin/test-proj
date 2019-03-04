import {
    combineReducers
} from 'redux'

import indicatorReducer from './indicator'
import competenceReducer from './competence'
import companyReducer from './company'

export default combineReducers({
    indicatorStore: indicatorReducer,
    competenceStore: competenceReducer,
    companyStore: companyReducer
});