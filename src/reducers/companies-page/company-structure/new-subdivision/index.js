import initialState from './initial-state'

import {
   NEW_SUBDIVISION_NAME_SUCCESS_VALIDATION,
   NEW_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION,
   NEW_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION,
   NEW_SUBDIVISION_NAME_ERROR_VALIDATION,
   RESET_NEW_SUBDIVISION,
   NEW_SUBDIVISION_SAVED,
   UPDATE_NEW_SUBDIVISION_NAME,
   UPDATE_NEW_SUBDIVISION_DESCRIPTION
} from '../../../../actions/companies-page/company-structure/new-subdivision'

import {
   newSubdivisionNameSuccessValidation,
   newSubdivisionDescriptionSuccessValidation,
   newSubdivisionDescriptionErrorValidation,
   newSubdivisionNameErrorValidation,
   resetNewSubdivision,
   newSubdivisionSaved,
   updateNewSubdivisionName,
   updateNewSubdivisionDescription
} from './new-subdivision'

const rootReducer = (state = initialState, { type, value }) => {
   switch(type){
      case NEW_SUBDIVISION_NAME_SUCCESS_VALIDATION:
         return newSubdivisionNameSuccessValidation(state)
      case NEW_SUBDIVISION_DESCRIPTION_SUCCESS_VALIDATION:
         return newSubdivisionDescriptionSuccessValidation(state)
      case NEW_SUBDIVISION_DESCRIPTION_ERROR_VALIDATION:
         return newSubdivisionDescriptionErrorValidation(state)
      case NEW_SUBDIVISION_NAME_ERROR_VALIDATION:
         return newSubdivisionNameErrorValidation(state, value)
      case RESET_NEW_SUBDIVISION:
         return resetNewSubdivision(state)
      case NEW_SUBDIVISION_SAVED:
         return newSubdivisionSaved(state)
      case UPDATE_NEW_SUBDIVISION_NAME:
         return updateNewSubdivisionName(state, value)
      case UPDATE_NEW_SUBDIVISION_DESCRIPTION:
         return updateNewSubdivisionDescription(state, value)
      default: 
         return state
   }
}

export default rootReducer