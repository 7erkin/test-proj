import { combineReducers } from "redux";

import requestsPageReducer from './requests-page'
import companiesPageReducer from './companies-page'

const rootReducer = combineReducers({
    requestsPage: requestsPageReducer,
    companiesPage: companiesPageReducer
});

export default rootReducer;