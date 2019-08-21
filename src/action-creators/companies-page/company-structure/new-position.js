import {
   NEW_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION,
   NEW_POSITION_NAME_SUCCESS_VALIDATION,
   NEW_POSITION_DESCRIPTION_SUCCESS_VALIDATION,
   NEW_POSITION_SUBDIVISION_ID_ERROR_VALIDATION,
   NEW_POSITION_NAME_ERROR_VALIDATION,
   NEW_POSITION_DESCRIPTION_ERROR_VALIDATION,
   RESET_NEW_POSITION,
   NEW_POSITION_SAVED,
   UPDATE_NEW_POSITION_SUBDIVISION_ID,
   UPDATE_NEW_POSITION_NAME,
   UPDATE_NEW_POSITION_DESCRIPTION
} from '../../../actions/companies-page/company-structure/new-position'

export const newPositionSubdivisionIdSuccessValidation = () => {
   return {
      type: NEW_POSITION_SUBDIVISION_ID_SUCCESS_VALIDATION
      
   }
} 

export const newPositionNameSuccessValidation = () => {
   return {
      type: NEW_POSITION_NAME_SUCCESS_VALIDATION
      
   }
} 

export const newPositionDescriptionSuccessValidation = () => {
   return {
      type: NEW_POSITION_DESCRIPTION_SUCCESS_VALIDATION
      
   }
} 

export const newPositionSubdivisionIdErrorValidation = (arg) => {
   return {
      type: NEW_POSITION_SUBDIVISION_ID_ERROR_VALIDATION,
      value: arg
   }
} 

export const newPositionNameErrorValidation = (arg) => {
   return {
      type: NEW_POSITION_NAME_ERROR_VALIDATION,
      value: arg
   }
} 

export const newPositionDescriptionErrorValidation = (arg) => {
   return {
      type: NEW_POSITION_DESCRIPTION_ERROR_VALIDATION,
      value: arg
   }
} 

export const resetNewPosition = () => {
   return {
      type: RESET_NEW_POSITION
      
   }
} 

export const newPositionSaved = () => {
   return {
      type: NEW_POSITION_SAVED
      
   }
} 

export const updateNewPositionSubdivisionId = (arg) => {
   return {
      type: UPDATE_NEW_POSITION_SUBDIVISION_ID,
      value: arg
   }
} 

export const updateNewPositionName = (arg) => {
   return {
      type: UPDATE_NEW_POSITION_NAME,
      value: arg
   }
} 

export const updateNewPositionDescription = (arg) => {
   return {
      type: UPDATE_NEW_POSITION_DESCRIPTION,
      value: arg
   }
} 

