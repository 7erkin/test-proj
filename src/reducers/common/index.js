import { combineReducers } from "redux";

import accordeonIndicatorReducer from './accordeon-indicator'

const rootReducer = combineReducers({
    accordeonIndicator: accordeonIndicatorReducer
});

export default rootReducer;