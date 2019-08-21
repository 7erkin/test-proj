import {
   EDIT_SUBDIVISION_NAME_SUCCESS_VALIDATION,
   EDIT_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION,
   EDIT_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION,
   EDIT_SUBDIVISION_NAME_ERROR_VALIDATION,
   RESET_EDIT_SUBDIVISION,
   EDIT_SUBDIVISION_SAVED,
   UPDATE_EDIT_SUBDIVISION_NAME,
   UPDATE_EDIT_SUBDIVISION_DESCRIPTION,
   SET_EDIT_SUBDIVISION
} from '../../../actions/companies-page/company-structure/edit-subdivision'

export const editSubdivisionNameSuccessValidation = () => {
   return {
      type: EDIT_SUBDIVISION_NAME_SUCCESS_VALIDATION
      
   }
} 

export const editSubdivisionDescriptionSuccessValidation = () => {
   return {
      type: EDIT_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION
      
   }
} 

export const editSubdivisionDescriptionErrorValidation = (arg) => {
   return {
      type: EDIT_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION,
      value: arg
   }
} 

export const editSubdivisionNameErrorValidation = (arg) => {
   return {
      type: EDIT_SUBDIVISION_NAME_ERROR_VALIDATION,
      value: arg
   }
} 

export const resetEditSubdivision = () => {
   return {
      type: RESET_EDIT_SUBDIVISION
      
   }
} 

export const editSubdivisionSaved = () => {
   return {
      type: EDIT_SUBDIVISION_SAVED
      
   }
} 

export const updateEditSubdivisionName = (arg) => {
   return {
      type: UPDATE_EDIT_SUBDIVISION_NAME,
      value: arg
   }
} 

export const updateEditSubdivisionDescription = (arg) => {
   return {
      type: UPDATE_EDIT_SUBDIVISION_DESCRIPTION,
      value: arg
   }
} 

export const setEditSubdivision = (arg) => {
   return {
      type: SET_EDIT_SUBDIVISION,
      value: arg
   }
} 

