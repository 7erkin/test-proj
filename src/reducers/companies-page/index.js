import { combineReducers } from "redux"

import companiesList from './companies-list'
import newCompany from './new-company'
import networkWaiting from './network-waiting'
import companyStructure from './company-structure'

const rootReducer = combineReducers({
    companiesList,
    newCompany,
    networkWaiting,
    companyStructure
})

export default rootReducer