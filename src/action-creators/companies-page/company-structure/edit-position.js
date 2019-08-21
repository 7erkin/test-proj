import {
   EDIT_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION,
   EDIT_POSITION_NAME_SUCCESS_VALIDATION,
   EDIT_POSITION_DESCRIPTION_SUCCESS_VALIDATION,
   EDIT_POSITION_SUBDIVISION_ID_ERROR_VALIDATION,
   EDIT_POSITION_NAME_ERROR_VALIDATION,
   EDIT_POSITION_DESCRIPTION_ERROR_VALIDATION,
   RESET_EDIT_POSITION,
   EDIT_POSITION_SAVED,
   UPDATE_EDIT_POSITION_SUBDIVISION_ID,
   UPDATE_EDIT_POSITION_NAME,
   UPDATE_EDIT_POSITION_DESCRIPTION,
   SET_EDIT_POSITION
} from '../../../actions/companies-page/company-structure/edit-position'

export const editPositionSubdivisionIdSuccessValidation = () => {
   return {
      type: EDIT_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION
      
   }
} 

export const editPositionNameSuccessValidation = () => {
   return {
      type: EDIT_POSITION_NAME_SUCCESS_VALIDATION
      
   }
} 

export const editPositionDescriptionSuccessValidation = () => {
   return {
      type: EDIT_POSITION_DESCRIPTION_SUCCESS_VALIDATION
      
   }
} 

export const editPositionSubdivisionIdErrorValidation = (arg) => {
   return {
      type: EDIT_POSITION_SUBDIVISION_ID_ERROR_VALIDATION,
      value: arg
   }
} 

export const editPositionNameErrorValidation = (arg) => {
   return {
      type: EDIT_POSITION_NAME_ERROR_VALIDATION,
      value: arg
   }
} 

export const editPositionDescriptionErrorValidation = (arg) => {
   return {
      type: EDIT_POSITION_DESCRIPTION_ERROR_VALIDATION,
      value: arg
   }
} 

export const resetEditPosition = () => {
   return {
      type: RESET_EDIT_POSITION
      
   }
} 

export const editPositionSaved = () => {
   return {
      type: EDIT_POSITION_SAVED
      
   }
} 

export const updateEditPositionSubdivisionId = (arg) => {
   return {
      type: UPDATE_EDIT_POSITION_SUBDIVISION_ID,
      value: arg
   }
} 

export const updateEditPositionName = (arg) => {
   return {
      type: UPDATE_EDIT_POSITION_NAME,
      value: arg
   }
} 

export const updateEditPositionDescription = (arg) => {
   return {
      type: UPDATE_EDIT_POSITION_DESCRIPTION,
      value: arg
   }
} 

export const setEditPosition = (arg) => {
   return {
      type: SET_EDIT_POSITION,
      value: arg
   }
} 

