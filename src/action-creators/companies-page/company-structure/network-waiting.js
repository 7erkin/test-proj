import {
   START_LOADING_SUBDIVISIONS,
   FINISH_LOADING_SUBDIVISIONS,
   START_LOADING_POSITIONS,
   FINISH_LOADING_POSITIONS
} from '../../../actions/companies-page/company-structure/network-waiting'

export const startLoadingSubdivisions = () => {
   return {
      type: START_LOADING_SUBDIVISIONS
      
   }
} 

export const finishLoadingSubdivisions = () => {
   return {
      type: FINISH_LOADING_SUBDIVISIONS
      
   }
} 

export const startLoadingPositions = () => {
   return {
      type: START_LOADING_POSITIONS
      
   }
} 

export const finishLoadingPositions = () => {
   return {
      type: FINISH_LOADING_POSITIONS
      
   }
} 

