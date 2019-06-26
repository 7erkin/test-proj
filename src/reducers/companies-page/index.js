import { combineReducers } from "redux"

import companiesList from './companies-list'
import newCompany from './new-company'
import networkWaiting from './network-waiting'

const rootReducer = combineReducers({
    companiesList,
    newCompany,
    networkWaiting
})

export default rootReducer