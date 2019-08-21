import { combineReducers } from "redux"

import editPosition from './edit-position'
import editSubdivision from './edit-subdivision'
import entities from './entities'
import networkWaiting from './network-waiting'
import newPosition from './new-position'
import newSubdivision from './new-subdivision'

export default combineReducers({
    editPosition,
    editSubdivision,
    entities,
    networkWaiting,
    newPosition,
    newSubdivision
})