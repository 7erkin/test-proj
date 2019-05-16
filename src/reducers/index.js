import { combineReducers } from "redux";

import requestsPageReducer from './requests-page'
import companiesPageReducer from './companies-page'
import existRequestPageReducer from './exist-request-page'
import newRequestPageReducer from './new-request-page'
import newCompanyPageReducer from './new-company-page'
import libraryPageReducer from './library-page'

const rootReducer = combineReducers({
    requestsPage: requestsPageReducer,
    companiesPage: companiesPageReducer,
    existRequestPage: existRequestPageReducer,
    newRequestPage: newRequestPageReducer,
    newCompanyPage: newCompanyPageReducer,
    libraryPage: libraryPageReducer
});

export default rootReducer;