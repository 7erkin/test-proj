import loading from './loading'
import common from './questions'
import newQuestion from './new-question'

import { combineReducers } from 'redux';

export default combineReducers({
    loading,
    common,
    newQuestion
})