import { combineReducers } from 'redux';

import entityReducer from './entity'
import editEntityReducer from './edit-entity'
import newEntityReducer from './new-entity'
import pointedEntityReducer from './pointed-entity'
import loadingReducer from './loading'
import visibleReducer from './visible'

export default combineReducers({
    entity: entityReducer,
    editEntity: editEntityReducer,
    newEntity: newEntityReducer,
    pointedEntity: pointedEntityReducer,
    loading: loadingReducer,
    visible: visibleReducer
});