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
} from '../../../actions/companies-page/company-structure/entities'

export const updateVisibleSubdivisions = (arg) => {
   return {
      type: UPDATE_VISIBLE_SUBDIVISIONS,
      value: arg
   }
} 

export const updateVisiblePositions = (arg) => {
   return {
      type: UPDATE_VISIBLE_POSITIONS,
      value: arg
   }
} 

export const subdivisionsDeleted = () => {
   return {
      type: SUBDIVISIONS_DELETED
      
   }
} 

export const positionsDeleted = () => {
   return {
      type: POSITIONS_DELETED
      
   }
} 

export const saveLoadedSubdivisions = (arg) => {
   return {
      type: SAVE_LOADED_SUBDIVISIONS,
      value: arg
   }
} 

export const saveLoadedPositions = (arg) => {
   return {
      type: SAVE_LOADED_POSITIONS,
      value: arg
   }
} 

export const updateDeletedSubdivisions = (arg) => {
   return {
      type: UPDATE_DELETED_SUBDIVISIONS,
      value: arg
   }
} 

export const updateDeletedPositions = (arg) => {
   return {
      type: UPDATE_DELETED_POSITIONS,
      value: arg
   }
} 

export const resetDeletedSubdivisions = () => {
   return {
      type: RESET_DELETED_SUBDIVISIONS
      
   }
} 

export const resetDeletedPositions = () => {
   return {
      type: RESET_DELETED_POSITIONS
      
   }
} 

