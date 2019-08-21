import {
   NEW_SUBDIVISION_NAME_SUCCESS_VALIDATION,
   NEW_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION,
   NEW_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION,
   NEW_SUBDIVISION_NAME_ERROR_VALIDATION,
   RESET_NEW_SUBDIVISION,
   NEW_SUBDIVISION_SAVED,
   UPDATE_NEW_SUBDIVISION_NAME,
   UPDATE_NEW_SUBDIVISION_DESCRIPTION
} from '../../../actions/companies-page/company-structure/new-subdivision'

export const newSubdivisionNameSuccessValidation = () => {
   return {
      type: NEW_SUBDIVISION_NAME_SUCCESS_VALIDATION
      
   }
} 

export const newSubdivisionDescriptionSuccessValidation = () => {
   return {
      type: NEW_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION
      
   }
} 

export const newSubdivisionDescriptionErrorValidation = () => {
   return {
      type: NEW_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION
      
   }
} 

export const newSubdivisionNameErrorValidation = (arg) => {
   return {
      type: NEW_SUBDIVISION_NAME_ERROR_VALIDATION,
      value: arg
   }
} 

export const resetNewSubdivision = () => {
   return {
      type: RESET_NEW_SUBDIVISION
      
   }
} 

export const newSubdivisionSaved = () => {
   return {
      type: NEW_SUBDIVISION_SAVED
      
   }
} 

export const updateNewSubdivisionName = (arg) => {
   return {
      type: UPDATE_NEW_SUBDIVISION_NAME,
      value: arg
   }
} 

export const updateNewSubdivisionDescription = (arg) => {
   return {
      type: UPDATE_NEW_SUBDIVISION_DESCRIPTION,
      value: arg
   }
} 

