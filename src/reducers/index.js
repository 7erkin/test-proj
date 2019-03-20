import {combineReducers} from  'redux'

import indicatorReducer from './indicator'
import competenceReducer from './competence'
import companyReducer from './company'
import commonReducer from './common'

export default combineReducers({
    indicatorPage: indicatorReducer,
    competencePage: competenceReducer,
    companyPage: companyReducer,
    common: commonReducer
});
