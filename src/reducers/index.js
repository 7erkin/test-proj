import { combineReducers } from "redux";

import requestsPageReducer from './requests-page'

const rootReducer = combineReducers({
    requestsPage: requestsPageReducer
});

export default rootReducer;