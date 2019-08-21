import initialState from './initial-state'

import {
   UPDATE_VISIBLE_SUBDIVISIONS,
   UPDATE_VISIBLE_POSITIONS,
   SUBDIVISIONS_DELETED,
   POSITIONS_DELETED,
   SAVE_LOADED_SUBDIVISIONS,
   SAVE_LOADED_POSITIONS,
   UPDATE_DELETED_SUBDIVISIONS,
   UPDATE_DELETED_POSITIONS,
   RESET_DELETED_SUBDIVISIONS,
   RESET_DELETED_POSITIONS
} from '../../../../actions/companies-page/company-structure/entities'

import {
   updateVisibleSubdivisions,
   updateVisiblePositions,
   subdivisionsDeleted,
   positionsDeleted,
   saveLoadedSubdivisions,
   saveLoadedPositions,
   updateDeletedSubdivisions,
   updateDeletedPositions,
   resetDeletedSubdivisions,
   resetDeletedPositions
} from './entities'

const rootReducer = (state = initialState, { type, value }) => {
   switch(type){
      case UPDATE_VISIBLE_SUBDIVISIONS:
         return updateVisibleSubdivisions(state, value)
      case UPDATE_VISIBLE_POSITIONS:
         return updateVisiblePositions(state, value)
      case SUBDIVISIONS_DELETED:
         return subdivisionsDeleted(state)
      case POSITIONS_DELETED:
         return positionsDeleted(state)
      case SAVE_LOADED_SUBDIVISIONS:
         return saveLoadedSubdivisions(state, value)
      case SAVE_LOADED_POSITIONS:
         return saveLoadedPositions(state, value)
      case UPDATE_DELETED_SUBDIVISIONS:
         return updateDeletedSubdivisions(state, value)
      case UPDATE_DELETED_POSITIONS:
         return updateDeletedPositions(state, value)
      case RESET_DELETED_SUBDIVISIONS:
         return resetDeletedSubdivisions(state)
      case RESET_DELETED_POSITIONS:
         return resetDeletedPositions(state)
      default: 
         return state
   }
}

export default rootReducer