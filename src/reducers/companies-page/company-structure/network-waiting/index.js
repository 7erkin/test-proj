import initialState from './initial-state'

import {
   START_LOADING_SUBDIVISIONS,
   FINISH_LOADING_SUBDIVISIONS,
   START_LOADING_POSITIONS,
   FINISH_LOADING_POSITIONS
} from '../../../../actions/companies-page/company-structure/network-waiting'

import {
   startLoadingSubdivisions,
   finishLoadingSubdivisions,
   startLoadingPositions,
   finishLoadingPositions
} from './network-waiting'

const rootReducer = (state = initialState, { type, value }) => {
   switch(type){
      case START_LOADING_SUBDIVISIONS:
         return startLoadingSubdivisions(state)
      case FINISH_LOADING_SUBDIVISIONS:
         return finishLoadingSubdivisions(state)
      case START_LOADING_POSITIONS:
         return startLoadingPositions(state)
      case FINISH_LOADING_POSITIONS:
         return finishLoadingPositions(state)
      default: 
         return state
   }
}

export default rootReducer