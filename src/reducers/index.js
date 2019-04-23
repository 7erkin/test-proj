import {combineReducers} from  'redux'

import indicatorReducer from './indicator'
import competenceReducer from './competence'
import companyReducer from './company'
import positionReducer from './position'
import commonReducer from './common'

export default combineReducers({
    indicatorPage: indicatorReducer,
    competencePage: competenceReducer,
    companyPage: companyReducer,
    positionPage: positionReducer,
    common: commonReducer
});
