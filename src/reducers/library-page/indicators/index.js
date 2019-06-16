import common from './indicators'
import editIndicatorsGroup from './edit-indicators-group'
import editIndicator from './edit-indicator'
import loading from './loading'
import newIndicator from './new-indicator'
import newIndicatorsGroup from './new-indicators-group'

import { combineReducers } from 'redux';

export default combineReducers({
    common,
    editIndicatorsGroup,
    editIndicator,
    loading,
    newIndicator,
    newIndicatorsGroup
})